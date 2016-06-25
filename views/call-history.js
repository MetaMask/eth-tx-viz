const h = require('virtual-dom/virtual-hyperscript')
const renderNavigation = require('./navigation')


module.exports = function(state, actions) {
  let selectedItemTop
  let callStack = state.stackFrames[state.frameIndex].map((callIndex) => state.allCalls[callIndex])

  const menu = h('div', {
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
    h('div', {
      style: {
        backgroundColor: '#FA6B16',
        padding: '20px',
      },
    }, [
      h('h3', {style: {color: 'white', fontWeight: 300, margin: 0}}, `Step ${state.frameIndex+1} of ${state.allCalls.length}`),
      renderNavigation({
        forwardFrame: actions.forwardFrame,
        backFrame: actions.backFrame,
        toggleAutoplay: actions.toggleAutoplay,
      }),
      h('h4', {style: {color: 'white', margin: 0}}, `Autoplay: ${state.autoplay ? 'ENABLED' : 'DISABLED'}`),
      h('h4', {style: {color: 'white', margin: 0}}, `Stack Depth: ${callStack.length}`),

    ]),

    h('style', `
      li {
        margin: 0;
        border-bottom: 2px solid white;
      }

      li:hover {
        cursor: pointer;
        background: white;
      }
      li.selected {
        background: #FFFFFF;
      }
      li p {
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 0;
      }
    `),

    h('ol', {
      height: '100%',
      style: {
        paddingLeft: '0px',
        overflowY: 'auto',
        overflowX: 'hidden',
       },
    }, state.allCalls.map((call, index) => {
      const selected = index === state.frameIndex
      const classes = selected ? '.selected' : ''
      const { fromAddress, toAddress, label } = call
      return (

        h(`li${classes}#stack-item-${index}`, {
          style: {
            display: 'block',
            padding: '10px',
          },
          onclick:() => {
            actions.selectFrame(index)
            actions.setAutoplay(false)
          },
        }, [
          h('p', {style: {fontWeight: 600}}, `${index+1}: ${label}`),
          h('p', `from: ${fromAddress}`),
          h('p', `to: ${toAddress}`),
        ])

      )
    }))
  ])

  return menu
}
