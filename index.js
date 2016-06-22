const extend = require('xtend')
const createElement = require('virtual-dom/create-element')
const diff = require('virtual-dom/diff')
const patch = require('virtual-dom/patch')
const traceData = require('./trace.json')
const renderGraph = require('./lib/render')
const h = require('virtual-dom/virtual-hyperscript')
const renderNavigation = require('./lib/navigation')


// state
var state = {
  accounts: extend(traceData.accounts),
  calls: [],
}

// update state and rerender
var counter = 0
var loop = setInterval(function(){

  // For the current frame of the transaction trace,
  // show the current stack
  // if we reach the end of the stackFrames, do not rerender.
  var currentStack = traceData.stackFrames[counter]

  if (currentStack) {
    state.calls = currentStack.map(function(element) {
      return traceData.calls[element]
    })
  } else {
    clearInterval(loop)
  }

  counter++
  rerender()
}, 1000)

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

    h('div',[
      h('div','Transaction Replay'),
      renderGraph(state)
    ])

  )
}