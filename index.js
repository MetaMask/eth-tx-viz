const extend = require('xtend')
const createElement = require('virtual-dom/create-element')
const diff = require('virtual-dom/diff')
const patch = require('virtual-dom/patch')
const traceData = require('./trace.json')
const renderGraph = require('./lib/render')

// state
var state = {
  accounts: extend(traceData.accounts),
  calls: [],
}

// update state and rerender
var counter = 0
var loop = setInterval(function(){
  counter++

  // empty the call stack to be repopulated
  

  // For the current snapshot of the stack, 
  // push the appropriate elements to be rendered.
  // if we reach the end of the stackTrace, do not rerender.
  var currentStack = traceData.stackTrace[counter]

  if (currentStack) {
    state.calls = currentStack.map(function(element) {
      return traceData.calls[element]
    })
  } else {
    clearInterval(loop)
  }


  // state.calls = traceData.calls.slice(0,counter)
  // debugger;
  rerender()
}, 1000)

// setup dom
var tree = renderGraph(state)
var rootNode = createElement(tree)
document.body.appendChild(rootNode)
document.body.style.background = '#333'

function rerender(){
  var newTree = renderGraph(state)
  var patches = diff(tree, newTree)
  rootNode = patch(rootNode, patches)
  tree = newTree
}

