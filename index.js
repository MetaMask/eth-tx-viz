const extend = require('xtend')
const createElement = require('virtual-dom/create-element')
const diff = require('virtual-dom/diff')
const patch = require('virtual-dom/patch')
const traceData = require('./trace.json')
const h = require('virtual-dom/virtual-hyperscript')
const renderNavigation = require('./lib/navigation')
const renderGraph = require('./lib/render')
const renderCallHistory = require('./lib/call-history')
const addAbiData = require('./lib/add-abi-data')
const ABIs = require('./lib/abi')

// decorate calls with ABI-sourced data
addAbiData(traceData.calls, ABIs)

// state
var state = {
  accounts: extend(traceData.accounts),
  calls: [],
  frameIndex: 0,
  autoplay: true,
}

var totalCalls = traceData.calls.length
var stackDepth = 0

// update state and rerender
setInterval(function(){
  updateStackFrame()
  rerender()
}, 1000)

function updateStackFrame() {

  // For the current frame of the transaction trace,
  // show the current stack
  // if we reach the end of the stackFrames, do not rerender.
  var currentStack = traceData.stackFrames[state.frameIndex]

  if (currentStack) {
    stackDepth = currentStack.length
    state.calls = currentStack.map(function(element) {
      return traceData.calls[element]
    })
  }

  if (state.autoplay) {
    location.href = `#stack-item-${state.frameIndex}`
    state.frameIndex++
  }
}

function selectFrame(frameIndex){
  state.frameIndex = frameIndex
  state.autoplay = false
  changeFocus()
  updateStackFrame()
  rerender()
}

function changeFocus() {
  location.href = `#stack-item-${state.frameIndex}`
}

function forwardFrame() {
  selectFrame(state.frameIndex + 1)
}

function backFrame() {
  selectFrame(state.frameIndex - 1)
}

function toggleAutoplay() {
  state.autoplay = !state.autoplay
}

function autoplayStatus() {
  return `Autoplay ${state.autoplay ? ("Enabled") : ("Disabled")}`
}


// setup dom
var tree = render(state)
var rootNode = createElement(tree)
document.body.appendChild(rootNode)
// document.body.style.background = '#333'

function rerender(){
  var newTree = render(state)
  var patches = diff(tree, newTree)
  rootNode = patch(rootNode, patches)
  tree = newTree
}

function render(state) {
  return (

    h('div', { style: { fontFamily: 'Open Sans' } }, [
      h('h1', { style: {textTransform: "uppercase", 
                        fontWeight: 300,
                        letterSpacing: "2px"}},'Transaction Replay'),
      h('h2', `Step ${state.frameIndex} of ${totalCalls}`),
      h('h2', `Stack Level: ${stackDepth}`),
      h('h2', autoplayStatus()),
      renderNavigation({
          forwardFrame: forwardFrame,
          backFrame: backFrame,
          toggleAutoplay: toggleAutoplay
      }),
      h('div', {
        style: {
          display: 'flex',
        }
      }, [
        renderGraph(state),
        renderCallHistory(state.frameIndex, traceData.calls, {
          selectFrame: selectFrame
        })
      ])
    ])

  )
}
