const async = require('async')
const xhr = require('xhr')
const ethUtil = require('ethereumjs-util')
const BN = ethUtil.BN
const ethAbi = require('ethereumjs-abi')

module.exports = decorateCallTrace


const messageDecoders = {}

function decorateCallTrace(callTrace, cb){

  async.each(callTrace.calls, (msgData, next) => {

    // contract deploys
    var toAddress = msgData.toAddress
    if (!toAddress) {
      msgData.label = 'contract deploy'
      return next()
    }

    // no tx data (simple send)
    if (!msgData.data) {
      msgData.label = 'simple send'
      return next()
    }

    // parse tx data for method name
    var callData = ethUtil.toBuffer(msgData.data)
    var messageId = callData.slice(0, 4)
    var messageArgs = callData.slice(4)

    lookupMethodId(messageId, (err, methodSignature) => {
      if (err) {
        msgData.label = 'unknown method'
        return next()
      }
      
      // parse arguments into label
      var callArgs = ethAbi.rawDecode(methodSignature.args, messageArgs).map(ethUtil.toBuffer)
      var callArgsLabel = callArgs.map((arg, index) => {
        var argType = methodSignature.args[index]
        var argLabel = null
        if (argType === 'address') {
          argLabel = ethUtil.bufferToHex(arg)
        } else {
          argLabel = decodeSingle(argType, arg)
        }
        return argLabel
      }).join()
      var msgLabel = `${methodSignature.method}(${callArgsLabel})` 
      msgData.label = msgLabel
      next()
    })

  // complete and pass on modified callTrace
  }, (err) => {
    if (err) return cb(err)
    cb(null, callTrace)
  })
}

var methodSignatureCache = {}
function lookupMethodId(messageId, cb){
  if (messageId.length < 4) return cb(new Error('lookup-method-id - invalid methodId'))
  var messageIdHex = messageId.toString('hex')
  var cachedValue = methodSignatureCache[messageIdHex]
  if (cachedValue) return cb(null, cachedValue)
  var baseUrl = 'https://www.4byte.directory/api/v1/signatures/?hex_signature='
  var targetUrl = baseUrl+messageIdHex
  xhr.get({ uri: targetUrl, json: true }, (err, res, body) => {
    if (err) return cb(err)
    var result = body && body.results && body.results[0]
    if (!result) return cb(new Error('lookup-method-id - unknown method'))
    var methodSignatureString = result.text_signature
    var result = parseSignature(methodSignatureString)
    methodSignatureCache[messageIdHex] = result
    cb(null, result)
  })
}


//
// ethereumjs-abi unexported methods
//

// someMethod()
// someMethod(bytes,uint)
// someMethod(bytes,uint):(boolean)
function parseSignature (sigString) {
  var methodEndIndex = sigString.indexOf('(')
  if (methodEndIndex === -1) {
    throw new Error('Invalid method signature')
  }
  var methodName = sigString.slice(0,methodEndIndex)
  var allArgs = sigString.slice(methodEndIndex+1,-1)
  var [ inputArgs, outputArgs ] = allArgs.split(':')

  return {
    method: methodName,
    args: (inputArgs ? inputArgs.split(',') : []),
    retargs: (outputArgs ? outputArgs.split(',') : null),
  }
}

// Decodes a single item (can be dynamic array)
// @returns: array
// FIXME: this method will need a lot of attention at checking limits and validation
function decodeSingle (type, arg) {
  var size, num, ret, i

  if (type === 'address') {
    return decodeSingle('uint160', arg)
  } else if (type === 'bool') {
    return decodeSingle('uint8', arg).toString() === new BN(1).toString()
  } else if (type === 'string') {
    return new Buffer(decodeSingle('bytes', arg), 'utf8').toString()
  } else if (type.match(/\w+\[\d+\]/)) {
    // this part handles fixed-length arrays ([2])
    // NOTE: we catch here all calls to arrays, that simplifies the rest
    size = parseTypeArray(type)
    type = type.slice(0, type.indexOf('['))

    ret = []
    for (i = 0; i < size; i++) {
      ret.push(decodeSingle(type, arg.slice(i * 32)))
    }

    return ret
  } else if (type.match(/\w+\[\]/)) {
    // this part handles variable length ([])
    // NOTE: we catch here all calls to arrays, that simplifies the rest
    type = type.slice(0, type.indexOf('['))
    var count = decodeSingle('uint256', arg.slice(0, 32)).toNumber()

    ret = []
    for (i = 1; i < count + 1; i++) {
      ret.push(decodeSingle(type, arg.slice(i * 32)))
    }

    return ret
  } else if (type === 'bytes') {
    size = decodeSingle('uint256', arg.slice(0, 32)).toNumber()
    return arg.slice(32, 32 + size)
  } else if (type.startsWith('bytes')) {
    size = parseTypeN(type)
    if (size < 1 || size > 32) {
      throw new Error('Invalid bytes<N> width: ' + size)
    }

    return arg.slice(0, size)
  } else if (type.startsWith('uint')) {
    size = parseTypeN(type)
    if ((size % 8) || (size < 8) || (size > 256)) {
      throw new Error('Invalid uint<N> width: ' + size)
    }

    num = new BN(arg.slice(0, 32), 16, 'be')
    if (num.bitLength() > size) {
      throw new Error('Decoded int exceeds width: ' + size + ' vs ' + num.bitLength())
    }

    return num
  } else if (type.startsWith('int')) {
    size = parseTypeN(type)
    if ((size % 8) || (size < 8) || (size > 256)) {
      throw new Error('Invalid uint<N> width: ' + size)
    }

    num = new BN(arg.slice(0, 32), 16, 'be').fromTwos(256)
    if (num.bitLength() > size) {
      throw new Error('Decoded uint exceeds width: ' + size + ' vs ' + num.bitLength())
    }

    return num
  } else if (type.startsWith('ufixed')) {
    size = parseTypeNxM(type)
    size = new BN(2).pow(new BN(size[1]))

    num = decodeSingle('uint256', arg)
    if (!num.mod(size).isZero()) {
      throw new Error('Decimals not supported yet')
    }

    return num.div(size)
  } else if (type.startsWith('fixed')) {
    size = parseTypeNxM(type)
    size = new BN(2).pow(new BN(size[1]))

    num = decodeSingle('int256', arg)
    if (!num.mod(size).isZero()) {
      throw new Error('Decimals not supported yet')
    }

    return num.div(size)
  }

  throw new Error('Unsupported or invalid type: ' + type)
}


// Parse N from type<N>
function parseTypeN (type) {
  return parseInt(/^\D+(\d+)$/.exec(type)[1], 10)
}

// Parse N,M from type<N>x<M>
function parseTypeNxM (type) {
  var tmp = /^\D+(\d+)x(\d+)$/.exec(type)
  return [ parseInt(tmp[1], 10), parseInt(tmp[2], 10) ]
}

// Parse N from type[<N>]
function parseTypeArray (type) {
  var tmp = /^\w+\[(\d*)\]$/.exec(type)[1]
  if (tmp.length === 0) {
    return 0
  } else {
    return parseInt(tmp, 10)
  }
}
