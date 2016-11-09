const h = require('virtual-dom/virtual-hyperscript')
const renderNavigation = require('./navigation')

var exampleTxs = {
  mainnet: [{
    label: 'dao recursive attack',
    hash: '0xc0b6d5916bff007ef3a349b9191300e210a5fbb1db7f1cece50184c479947bc3',
  }],
  morden: [{
    label: 'uses precompiles',
    hash: '0x10d7f475e0fcca2925a734519012f20f02acd435921d66b46d4a6c4d75e84c26',
  }],
}

module.exports = function(send) {

  return (

    h('div', [
      examplesForNetwork('mainnet'),
      // examplesForNetwork('morden'),
    ])

  )

  function examplesForNetwork(networkName){
    return [

      h('h3', networkName),

      h('ol', [
        h('li', exampleTxs[networkName].map((tx) => {
          return h('div', {
            style: {
              cursor: 'pointer',
            },
            onclick: () => send('viz:navigateToTx', { value: tx.hash }),
          }, tx.label)
        })),
      ]),

    ]
  }
}


