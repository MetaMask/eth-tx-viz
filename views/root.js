const h = require('virtual-dom/virtual-hyperscript')
const renderGraph = require('./graph')
const renderCallHistory = require('./call-history')
const renderControls = require('./controls')
const renderExamples = require('./examples')

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
        h('div', {
          style: {
            background: '#EBEBEB',
            maxWidth: '220px',
            flex: -1,
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          },
        }, [
          // controls
          state.traceData ? 
            renderControls(state, {
              forwardFrame: () => send('viz:selectFrame', { value: state.frameIndex+1 }),
              backFrame: () => send('viz:selectFrame', { value: state.frameIndex-1 }),
              toggleAutoplay: () => send('viz:setAutoplay', { value: !state.autoplay }),
            }) : null,
          // call history
          state.traceData ? 
            renderCallHistory(state, {
              selectFrame: (index) => send('viz:selectFrame', { value: index }),
              setAutoplay: (value) => send('viz:setAutoplay', { value: value }),
            }) : null,
        ]),

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
            placeholder: state.targetTx,
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
          : state.targetTx ?
              h('h3', 'loading...')
            : renderExamples(send),

        ])

      ])
    ])

  )
}