const h = require('virtual-dom/virtual-hyperscript')

module.exports = function(frameNumber, calls, selectFrame) {
  let selectedItemTop

  const menu = h('div', {
    style: {
      background: '#afafaf',
      maxWidth: '220px',
      right: '5px',
      background: 'rgb(175, 175, 175)',
      position: 'absolute',
      height: '100%',
      overflowY: 'scroll',
    },
  }, [
    h('h2', 'Stack'),

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
    }, calls.map((call, i) => {
      const selected = i === frameNumber
      const selector = selected ? 'li.selected' : 'li'
      const { fromAddress, toAddress, label } = call
      return (

        h(`${selector}#stack-item-${i}`, {
          style: {
            width: '100%',
          },
          onclick:(ev) => {
            selectFrame(i)
          },
        }, [
          h('p', `${i+1}: ${label}`),
          h('p', `from: ${fromAddress}`),
          h('p', `to: ${toAddress}`),
        ])

      )
    }))
  ])

  return menu
}
