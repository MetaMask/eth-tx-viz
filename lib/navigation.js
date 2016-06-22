const h = require('virtual-dom/virtual-hyperscript')

module.exports = render

function render(state) {
  var back = h("button", "Back")
  var forward = h("button", "Forward")
  return (
    h("div",[back,forward])
  )
}