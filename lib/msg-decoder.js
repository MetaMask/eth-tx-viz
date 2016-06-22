const EthAbi = require('ethereumjs-abi')
const EthUtil = require('ethereumjs-util')

module.exports = MessageDecoder


function MessageDecoder(abi){
  const self = this
  self.abi = abi
  self.methodIdMap = {}
  // create methodId dictionary
  abi
  .filter(member => member.type === 'function')
  .forEach(member => {
    var types = member.inputs.map(input => input.type)
    var methodId = EthAbi.methodID(member.name, types).toString('hex')
    self.methodIdMap[methodId] = member
  })
}

MessageDecoder.prototype.decodeMessageData = function(msgData){
  const self = this
  var method = self.msgDataToMethod(msgData)
  var dataBuffer = EthUtil.toBuffer(msgData).slice(4)
  var inputTypes = method.inputs.map(input => input.type)
  var decodedInputs = EthAbi.rawDecode(inputTypes, dataBuffer)
  var decoded = {
    method: method,
    inputs: decodedInputs,
  } 
  return decoded
}

MessageDecoder.prototype.msgDataToMethod = function(data){
  const self = this
  var methodId = EthUtil.stripHexPrefix(data).slice(0,8)
  var method = self.methodIdMap[methodId]
  return method
}

MessageDecoder.prototype.labelMethodCall = function(decoded){
  const self = this
  var out = decoded.method.name
  out += '('
  out += decoded.inputs.map((input,index)=>{
    var name = decoded.method.inputs[index].name
    var value = input.toString(16)
    return `${name} 0x${value}`
  })
  out += ')'
  return out
}
