const async = require('async')
const xhr = require('xhr')
const ethUtil = require('ethereumjs-util')
const BN = ethUtil.BN
const ethAbi = require('ethereumjs-abi')
const MessageDecoder = require('./msg-decoder')

module.exports = decorateCallTrace


const messageDecoders = {}

function decorateCallTrace(callTrace, cb){

  async.each(callTrace.calls, (msgData, next) => {
    var toAddress = msgData.toAddress
    if (!toAddress) {
      msgData.label = 'contract deploy'
      return next()
    } else {
      // var abi = abis[toAddress]
      if (!msgData.data) {
        msgData.label = 'simple send'
        return next()
      }

      var callData = ethUtil.toBuffer(msgData.data)
      console.log('callData', callData)
      var messageId = callData.slice(0, 4)
      console.log('messageId', messageId)
      var messageArgs = callData.slice(4)
      console.log('messageArgs', messageArgs)

      lookupMethodId(messageId, (err, methodSignature) => {
        if (err) {
          // console.error(err.message)
          msgData.label = 'unknown method'
          return next()
        }
        
        var callArgs = ethAbi.rawDecode(methodSignature.args, messageArgs).map(ethUtil.toBuffer)
        console.log('types', methodSignature.args)
        console.log('callArgs', callArgs)
        var callArgsLabel = callArgs.map((arg, index) => {
          var argType = methodSignature.args[index]
          var argLabel = null
          if (argType === 'address') {
            argLabel = ethUtil.bufferToHex(arg)
          } else {
            argLabel = decodeSingle(argType, arg)
          }
          console.log('argLabel', argLabel)
          return argLabel
        }).join()
        console.log('callArgsLabel', callArgsLabel)
        var msgLabel = `${methodSignature.method}(${callArgsLabel})` 
        console.log('msgLabel', msgLabel)
        msgData.label = msgLabel
        next()
      })


      // } else if (abi) {
      //   var decoder = messageDecoderForAddress(toAddress, abi)
      //   var decodedMessage = decoder.decodeMessageData(msgData.data)
      //   msgData.label = decodedMessage.method.name
      //   // msgData.label = decoder.labelMethodCall(decodedMessage)
      // } else {
      //   msgData.label = 'unknown method'
      // }
    }
  }, (err) => {
    if (err) return cb(err)
    cb(null, callTrace)
  })
}

function lookupMethodId(messageId, cb){
  if (messageId.length < 4) return cb(new Error('lookup-method-id - invalid methodId'))
  var corsProxy = 'https://jsonp.afeld.me/?url='
  var baseUrl = 'https://www.4byte.directory/api/v1/signatures/?hex_signature='
  var targetUrl = baseUrl+messageId.toString('hex')
  console.log(targetUrl)
  xhr.get({
    uri: corsProxy+targetUrl,
    json: true,
  }, (err, res, body) => {
    if (err) return cb(err)
    var result = body && body.results && body.results[0]
    if (!result) return cb(new Error('lookup-method-id - unknown method'))
    var methodSignatureString = result.text_signature
    var result = parseSignature(methodSignatureString)
    cb(null, result)
  })
}

// someMethod(bytes,uint)
// someMethod(bytes,uint):(boolean)
function parseSignature (sigString) {
  var tmp = /^(\w+)\((.+)\)$/.exec(sigString)
  if (tmp.length !== 3) {
    throw new Error('Invalid method signature')
  }

  var args = /^(.+)\):\((.+)$/.exec(tmp[2])

  if (args !== null && args.length === 3) {
    return {
      method: tmp[1],
      args: args[1].split(','),
      retargs: args[2].split(',')
    }
  } else {
    return {
      method: tmp[1],
      args: tmp[2].split(',')
    }
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


// ----

function addAbiData(calls, abis){
  calls.forEach(msgData => {
    var toAddress = msgData.toAddress
    if (!toAddress) {
      msgData.label = 'contract deploy'
    } else {
      var abi = abis[toAddress]
      if (!msgData.data) {
        msgData.label = 'simple send'
      } else if (abi) {
        var decoder = messageDecoderForAddress(toAddress, abi)
        var decodedMessage = decoder.decodeMessageData(msgData.data)
        msgData.label = decodedMessage.method.name
        // msgData.label = decoder.labelMethodCall(decodedMessage)
      } else {
        msgData.label = 'unknown method'
      }
    }
  })
}

function messageDecoderForAddress(toAddress, abi){
  return messageDecoders[toAddress] = messageDecoders[toAddress] || new MessageDecoder(abi)
}