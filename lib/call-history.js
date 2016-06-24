const h = require('virtual-dom/virtual-hyperscript')

module.exports = function(frameNumber, calls, actions) {
  let selectedItemTop

  const menu = h('div', {
    style: {
      background: '#afafaf',
      maxWidth: '220px',
      right: '5px',
      background: 'rgb(175, 175, 175)',
      position: 'fixed',
      top: 0,
      right: 0,
      height: '100%',
      overflowY: 'scroll',
    },
  }, [
    h('h2', {style: {textAlign: "center"}}, 'Call Trace'),

    h('style', `
      li:hover {
        cursor: pointer;
        background: white;
      }
      li.selected {
        background: #c4c4fb;
      }
      li p {
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `),

    h('ol', {
      height: '100%',
    }, calls.map((call, index) => {
      const selected = index === frameNumber
      const selector = selected ? 'li.selected' : 'li'
      const { fromAddress, toAddress, label } = call
      return (

        h(`${selector}#stack-item-${index}`, {
          style: {
            width: '100%',
          },
          onclick:() => {
            actions.selectFrame(index)
          },
        }, [
          h('p', {style: {fontWeight: 600}}, `${index+1}: ${label}`),
          h('p', `from: ${fromAddress}`),
          h('p', `to: ${toAddress}`),
          h('hr')
        ])

      )
    }))
  ])

  return menu
}
