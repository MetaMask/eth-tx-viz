const extend = require('xtend')
const createElement = require('virtual-dom/create-element')
const diff = require('virtual-dom/diff')
const patch = require('virtual-dom/patch')
const traceData = require('./trace.json')
const renderGraph = require('./lib/render')
const renderMenu = require('./lib/menu')
const h = require('virtual-dom/virtual-hyperscript')
const renderNavigation = require('./lib/navigation')
const addAbiData = require('./lib/add-abi-data')
const ABIs = require('./lib/abi')

// decorate calls with ABI-sourced data
addAbiData(traceData.calls, ABIs)

// state
var state = {
  accounts: extend(traceData.accounts),
  calls: [],
}

// update state and rerender
var frameNumber = 0
var loop = setInterval(function(){
  renderAtFrame(frameNumber, false)
  frameNumber++
}, 1000)

function renderAtFrame(i, manual) {
  frameNumber = i
  console.log("rendering at frame " + i)
  if (manual) {
    console.log('clearing interval')
    clearInterval(loop)
  }

  // For the current frame of the transaction trace,
  // show the current stack
  // if we reach the end of the stackFrames, do not rerender.
  var currentStack = traceData.stackFrames[frameNumber]

  if (currentStack) {
    state.calls = currentStack.map(function(element) {
      return traceData.calls[element]
    })
  } else {
    clearInterval(loop)
  }

  rerender()
}

// setup dom
var tree = render(state)
var rootNode = createElement(tree)
document.body.appendChild(rootNode)
document.body.style.background = '#333'

function rerender(){
  var newTree = render(state)
  var patches = diff(tree, newTree)
  rootNode = patch(rootNode, patches)
  tree = newTree
}

function render(state) {
  return (

    h('div', { style: { fontFamily: 'monospace' } }, [
      h('h1','Transaction Replay'),
      h('div', {
        style: {
          display: 'flex'
        }
      }, [
        renderGraph(state),
        renderMenu(frameNumber, traceData.calls, (i) => renderAtFrame(i, true)),
      ])
    ])

  )
}
