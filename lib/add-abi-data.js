const MessageDecoder = require('./msg-decoder')

module.exports = addAbiData


var messageDecoders = {}

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