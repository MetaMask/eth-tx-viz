const extend = require('xtend')
const h = require('virtual-dom/virtual-hyperscript')
const svg = require('virtual-dom/virtual-hyperscript/svg')
const contractNicknames = require('../lib/nicknames.json')
const ColorPalette = require('../lib/palette')


module.exports = render

function render(state){

  let callStack = state.stackFrames[state.frameIndex].map((callIndex) => state.allCalls[callIndex])

  var defs = [markerArrow()]
  var nodePositions = calcNodePositions(state.accounts)
  var nodes = svg('g.nodes', renderAccounts(nodePositions, state.accounts))
  var links = svg('g.links', renderCalls(nodePositions, callStack))

  return (

    createSvg([
      svg('defs', defs),
      links,
      nodes,
    ])

  )
}



function calcNodePositions(accountData){
  var nodePositions = {}
  var accountList = valuesFor(accountData)
  accountList.map((account, index) => {
    var rotRadians = 2*Math.PI*(index/accountList.length)
    var layoutCenter = [260,220]
    var layoutCircleRadius = 200
    var nodeCenter = [
      layoutCenter[0]-layoutCircleRadius*Math.cos(rotRadians),
      layoutCenter[0]-layoutCircleRadius*Math.sin(rotRadians),
    ]
    nodePositions[account.address] = nodeCenter
  })
  return nodePositions
}

// accounts -> nodes
function renderAccounts(nodePositions, accountData){
  var pallete = ColorPalette()
  return valuesFor(accountData).map((account, index) => {
    var color = pallete.getColor()
    var nodeCenter = nodePositions[account.address]
    return renderAccount(nodeCenter, color, account)
  })
}

// accounts -> nodes
function renderCalls(nodePositions, callList){
  var pallete = ColorPalette()

  return callList.map((callTrace, index) => {
    var color = pallete.getColor()
    var start = nodePositions[callTrace.fromAddress]
    var end = nodePositions[callTrace.toAddress]
    var pathId = `call-${index}`
    var ethLabelText = (parseInt(callTrace.value,16)/1e18).toFixed(4)
    var dataLabelText = callTrace.label

    var isLastCallOnStack = index === callList.length-1
    if (isLastCallOnStack) {
      var ethLabel = pathLabel(pathId, ethLabelText, { dy: '-6' })
      var methodLabel = pathLabel(pathId, dataLabelText, { dy: '12' })
    }

    return svg('g', [

      path(pathId, start, end, { stroke: color }),
      ethLabel,
      methodLabel,

    ])
  })

}

function renderAccount(nodeCenter, color, account){
  return svg('g', [

    circle(nodeCenter, 20, {
      stroke: color,
      fill: color,
    }),

    label(nodeCenter, getNodeLabel(account.address)),

  ])
}

function createSvg(children){
  return (

    svg('svg', {
      height: '480',
      version: '1.1',
      width: '500',
      xmlns: 'http://www.w3.org/2000/svg',
      xlink: 'http://www.w3.org/1999/xlink',
      style: {
        overflow: 'hidden',
        position: 'relative',
        align: 'center',
        margin: '0 auto',
        display: 'block'
      }
    }, children)

  )
}

function markerArrow(){
  return (

    svg('marker#markerArrow', {
      'markerWidth': '13',
      'markerHeight': '13',
      'refX': '20',
      'refY': '6',
      'orient': 'auto',
      'id': 'markerArrow',
    }, [
      svg('path', {
        'd': 'M2,2 L2,11 L10,6 L2,2',
        'style': {
          'fill': '#000000',
        },
      })
    ])

  )
}


function circle(center, radius, attrs) {
  return (

    svg('circle', extend({
      cx: center[0],
      cy: center[1],
      r: radius,
    }, attrs))

  )
}

function path(id, start, end, attrs){
  if (!start || !end) debugger
  return (

    svg('path', extend({
      'id': id,
      'fill': 'none',
      'stroke': '#00bf85',
      'd': `M${start},${end}`,
      'stroke-width': '2',
      'style': {
        markerEnd: 'url(\'#markerArrow\')',
        opacity: 1,
      },
    }, attrs))

  )
}

function label(pos, name, attrs){
  attrs = attrs || {}
  return (

    svg('text', extend({
      'x': pos[0],
      'y': pos[1]-30,
      'style': {
        fontSize: '10px',
        stroke: 'none',
        textAnchor: 'middle',
        fontFamily: 'Fontin-Sans, Arial',
        fontSize: '12px',
        fontStyle: 'normal',
        fontVariant: 'normal',
        fontWeight: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
      },
    }, attrs), [
      svg('tspan', extend({
        'dy': '4.013669243112275',
      }, attrs.tspan), name)
    ])

  )
}

function pathLabel(id, label, attrs){
  attrs = attrs || {}
  return (

    svg('text', extend({
      dy: '-6',
      style: {
        'text-anchor': 'middle',
        font: '12px sans-serif',
      },
    }, attrs), [
      svg('textPath', extend({
        'xlink:href': `#${id}`,
        'startOffset': '50%',
      }, attrs), label)
    ])

  )
}


// util

function getNodeLabel(address){
  var nickname = contractNicknames[address]
  return nickname || address.slice(0,8)
}

function valuesFor(obj){
  return Object.keys(obj).map(key=>obj[key])
}

function forKeyValue(obj, fn){
  for (var key in obj){
    var val = obj[key]
    fn(key, val)
  }
}
