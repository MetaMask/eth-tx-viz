const h = require('virtual-dom/virtual-hyperscript')

module.exports = render

function render(actions) {
  var back = h("button",{onclick: actions.backFrame}, "<")
  var autoplay = h("button.middle", {onclick: actions.toggleAutoplay}, "P")
  var forward = h("button",{onclick: actions.forwardFrame}, ">")
  return (
    h("div", {style: {display: 'flex', width: "100%"}}, [back,autoplay,forward])
  )
}

