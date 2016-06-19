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
setInterval(function(){
  counter++
  state.calls = traceData.calls.slice(0,counter)
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

