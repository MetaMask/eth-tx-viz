const h = require('virtual-dom/virtual-hyperscript')
const renderNavigation = require('./navigation')


module.exports = function(state, actions) {
  let selectedItemTop
  let traceData = state.traceData

  return [

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

    // call list
    h('ol', {
      height: '100%',
      style: {
        paddingLeft: '0px',
        overflowY: 'auto',
        overflowX: 'hidden',
        margin: '4px 0',
       },
    }, traceData.calls.map((call, index) => {
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
    })),

  ]
}
