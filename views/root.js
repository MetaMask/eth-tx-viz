const h = require('virtual-dom/virtual-hyperscript')
const renderGraph = require('./graph')
const renderCallHistory = require('./call-history')

module.exports = renderRoot

function renderRoot(state, send){
  return (

    h('div', { style: { fontFamily: 'Open Sans' } }, [
      h('div', {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-top',
        }
      }, [
        renderCallHistory(state, {
          selectFrame: (index) => send('viz:selectFrame', { value: index }),
          forwardFrame: () => send('viz:selectFrame', { value: state.frameIndex+1 }),
          backFrame: () => send('viz:selectFrame', { value: state.frameIndex-1 }),
          toggleAutoplay: () => send('viz:setAutoplay', { value: !state.autoplay }),
          setAutoplay: (value) => send('viz:setAutoplay', { value: value }),
        }),

        h('div', {
          style: {
            marginRight: '30%',
            height: '100vh',
            // overflow: 'hidden',
          },
        }, [
          h('h2.title', 'Transaction Replay'),
          h('input.tx-hash', {
            value: '0xc0b6d5916bff007ef3a349b9191300e210a5fbb1db7f1cece50184c479947bc3',
            style: {
              marginBottom: '20px',
              width: '600px',
              height: '36px',
              fontSize: '1em',
              textAlign: 'center',
            },
            onchange: (event) => send('viz:loadTx', { value: event.target.value }),
          }),
          renderGraph(state),
        ])

      ])
    ])

  )
}