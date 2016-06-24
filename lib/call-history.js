const h = require('virtual-dom/virtual-hyperscript')

module.exports = function(frameNumber, calls, actions) {
  let selectedItemTop

  const menu = h('div', {
    style: {
      background: '#afafaf',
      maxWidth: '220px',
      background: 'rgb(175, 175, 175)',
      flex: -1,
      height: '100vh',
      display: 'flex',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
  }, [
    // h('div', {style: {textAlign: "center"}}, 'Call Trace'),

    h('style', `
      li {
        margin: 0;
      }

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
        max-width: 160px;
        margin: 0;
      }
    `),

    h('ol', {
      height: '100%',
      style: { paddingLeft: '0px',
               overflowY: 'auto',
               overflowX: 'hidden',
       },
    }, calls.map((call, index) => {
      const selected = index === frameNumber
      const selector = selected ? 'li.selected' : 'li'
      const { fromAddress, toAddress, label } = call
      return (

        h(`${selector}#stack-item-${index}`, {
          style: {
            width: '220px',
            display: 'block',
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
