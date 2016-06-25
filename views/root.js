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
        }),
        renderGraph(state),
      ])
    ])

  )
}