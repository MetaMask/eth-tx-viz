const urlUtil = require('url')
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
  totalCalls: traceData.calls.length,
  stackDepth: 0,
  autoplay: true,
}

var totalCalls = traceData.calls.length
var stackDepth = 0

// setup dom
var tree = render(state)
var rootNode = createElement(tree)
document.body.appendChild(rootNode)

// load state from url
loadStateFromUrl()
window.addEventListener('hashchange', loadStateFromUrl, false)

function loadStateFromUrl(){
  selectFrame(parseUrl())
  state.autoplay = true
}

// update state and rerender
setInterval(function(){
  updateStackFrame()
  updateUrl()
  rerender()
}, 1000)

function updateStackFrame() {

  // For the current frame of the transaction trace,
  // show the current stack
  // if we reach the end of the stackFrames, do not rerender.
  var currentStack = traceData.stackFrames[state.frameIndex]

  if (currentStack) {
    state.stackDepth = currentStack.length
    state.calls = currentStack.map(function(element) {
      return traceData.calls[element]
    })
  }

  if (state.autoplay) {
    state.frameIndex++
  }
}

function selectFrame(frameIndex){
  state.frameIndex = frameIndex
  state.autoplay = false
  updateStackFrame()
  updateUrl()
  rerender()
}

function updateUrl(){
  var hashLocation = `#stack-item-${state.frameIndex}`
  history.replaceState(undefined, undefined, hashLocation)
}

function parseUrl(){
  var hashLocationPrefix = '#stack-item-'
  var hashLocation = urlUtil.parse(location.href).hash
  var index = parseInt(hashLocation.slice(hashLocationPrefix.length)) || 0
  return index
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
  return `Autoplay: ${state.autoplay ? ("ENABLED") : ("DISABLED")}`
}

function rerender(){
  var newTree = render(state)
  var patches = diff(tree, newTree)
  rootNode = patch(rootNode, patches)
  tree = newTree
}

function render(state) {
  return (

    h('div', { style: { fontFamily: 'Open Sans' } }, [
      h('div', {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-top',
        }
      }, [
        renderCallHistory(state, traceData.calls, {
          selectFrame: selectFrame,
          forwardFrame: forwardFrame,
          backFrame: backFrame,
          toggleAutoplay: toggleAutoplay,
          autoplayStatus: autoplayStatus,
        }),
        renderGraph(state),
      ])
    ])

  )
}

