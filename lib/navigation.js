const h = require('virtual-dom/virtual-hyperscript')

module.exports = render

function render(actions) {
  var back = h("button",{onclick: actions.backFrame}, "Back")
  var forward = h("button",{onclick: actions.forwardFrame}, "Forward")
  var autoplay = h("button", {onclick: actions.toggleAutoplay}, "Toggle Autoplay")
  return (
    h("div",[back,forward,autoplay])
  )
}

