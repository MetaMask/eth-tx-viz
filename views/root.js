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
        
        // left panel
        state.traceData && renderCallHistory(state, {
          selectFrame: (index) => send('viz:selectFrame', { value: index }),
          forwardFrame: () => send('viz:selectFrame', { value: state.frameIndex+1 }),
          backFrame: () => send('viz:selectFrame', { value: state.frameIndex-1 }),
          toggleAutoplay: () => send('viz:setAutoplay', { value: !state.autoplay }),
          setAutoplay: (value) => send('viz:setAutoplay', { value: value }),
        }),

        // right workspace
        h('div', {
          style: {
            marginRight: '30%',
            height: '100vh',
          },
        }, [
          // label
          h('h2.title', 'Transaction Replay'),
          // tx input
          h('input.tx-hash', {
            value: state.targetTx,
            style: {
              marginBottom: '20px',
              width: '600px',
              height: '36px',
              fontSize: '1em',
              textAlign: 'center',
            },
            onchange: (event) => send('viz:loadTx', { value: event.target.value }),
          }),

          // graph
          state.traceData ?
            renderGraph(state)
          : h('h3', 'loading...'),

        ])

      ])
    ])

  )
}