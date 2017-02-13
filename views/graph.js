const extend = require('xtend')
const h = require('virtual-dom/virtual-hyperscript')
const svg = require('virtual-dom/virtual-hyperscript/svg')
const contractNicknames = require('../lib/nicknames')
const ColorPalette = require('../lib/palette')


module.exports = render

function render(state){

  let traceData = state.traceData
  let callStack = state.callStack

  var defs = [markerArrow()]
  var nodePositions = calcNodePositions(traceData.accounts)
  var nodes = svg('g.nodes', renderAccounts(nodePositions, traceData.accounts, state.activeLogs))
  var links = svg('g.links', renderCalls(nodePositions, callStack))

  return (

    createSvg([
      svg('defs', defs),
      svg('style', `
        .peekaboo-parent:not(:hover) .peekaboo-hidden {
          display: none;
        }
        .peekaboo-parent:hover .peekaboo-show {
          display: none;
        }
      `),
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
function renderAccounts(nodePositions, accountData, logs){
  var pallete = ColorPalette()
  return valuesFor(accountData).map((account, index) => {
    var color = pallete.getColor()
    var nodeCenter = nodePositions[account.address]
    var logsForAccount = logs.filter((log) => log.address === account.address)
    return renderAccount(nodeCenter, color, account, logsForAccount)
  })
}

// calls -> links
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

function renderAccount(nodeCenter, color, account, logs){
  return svg('g', { class: 'peekaboo-parent' }, [

    circle(nodeCenter, 20, {
      stroke: color,
      fill: color,
    }),

    label(nodeCenter, getNodeLabel(account.address), { dy: -30 }),
    renderLogs(nodeCenter, logs, { dy: 30 }),

  ])
}

function renderLogs(pos, logs, attrs){
  attrs = attrs || {}
  var dy = attrs.dy || 0
  var logCount = `${logs.length} ${logs.length === 1 ? 'log' : 'logs'}`
  var logLabel = logs.map((log) => log.topics[0]).join('\n')
  return (

    svg('text', extend({
      x: pos[0],
      y: pos[1]+dy,
      style: {
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

      // default label
      svg('tspan', extend({
        class: 'peekaboo-show',
        dy: '4',
      }, attrs.tspan), logCount),

      // hover label
      logs.map((log) => {
        var logLabel = 'LOG'+log.topics.length
        return [
          svg('tspan', extend({
            class: 'peekaboo-hidden',
            x: pos[0],
            dy: '1.2em',
          }), logLabel),
          log.topics.map((topic) => {
            return svg('tspan', extend({
              class: 'peekaboo-hidden',
              x: pos[0],
              dy: '1.2em',
            }), topic)
          }),
        ]
      })

    ])

  )

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
  var dy = attrs.dy || 0
  return (

    svg('text', extend({
      'x': pos[0],
      'y': pos[1]+dy,
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
        'dy': '4',
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
