const h = require('virtual-dom/virtual-hyperscript')
const renderNavigation = require('./navigation')


module.exports = function(state, actions) {
  let selectedItemTop
  let traceData = state.traceData
  let callStack = state.callStack

  return (

    // orange control block
    h('div', {
      style: {
        backgroundColor: '#FA6B16',
        padding: '20px',
      },
    }, [

      // current stack frame
      h('h3', {style: {color: 'white', fontWeight: 300, margin: 0}}, `Step ${state.frameIndex+1} of ${traceData.calls.length}`),
      
      // nav controls
      renderNavigation({
        forwardFrame: actions.forwardFrame,
        backFrame: actions.backFrame,
        toggleAutoplay: actions.toggleAutoplay,
      }),
      
      // autoplay
      h('h4', {style: {color: 'white', margin: 0}}, `Autoplay: ${state.autoplay ? 'ENABLED' : 'DISABLED'}`),

      // stack depth
      h('h4', {style: {color: 'white', margin: 0}}, `Stack Depth: ${callStack.length}`),

    ])

  )
}
