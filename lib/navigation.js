const h = require('virtual-dom/virtual-hyperscript')

module.exports = render

function render(state) {
  var back = h("button",{onclick: moveBack}, "Back")
  var forward = h("button",{onclick: moveForward}, "Forward")
  return (
    h("div",[back,forward])
  )
}

function moveBack() {
  console.log("back")
}

function moveForward() {
  console.log("forward")
}