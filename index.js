const h = require('virtual-dom/virtual-hyperscript/svg')
const createElement = require('virtual-dom/create-element')
const vdomStringify = require('virtual-dom-stringify')
const traceData = require('./trace.json')
const contractNicknames = require('./nicknames.json')
const ColorPalette = require('./lib/palette')

// setup dom
var tree = render()
var rootNode = createElement(tree)
document.body.appendChild(rootNode)
document.body.style.background = '#333'

function render(){

  var defs = []
  defs.push(markerArrow())

  var nodes = renderNodes()
  var labels = renderLabels()
  var paths = renderPaths()

  var pathLabels = renderPathLabels()

  // defs = defs.concat(renderPaths())

  return (

    svg([
      h('defs', defs),
      nodes,
      labels,
      paths,
      pathLabels,
    ])

  )
}

function svg(children){
  return (

    h('svg', {
      // 'attributes': {
        'height': '480',
        'version': '1.1',
        'width': '640',
        'xmlns': 'http://www.w3.org/2000/svg',
        'xlink': 'http://www.w3.org/1999/xlink',
      // },
      'style': {
        overflow: 'hidden',
        position: 'relative',
        background: '#333',
      }
    }, children)

  )
}

function styleFix(opts){
  var styleObj = {}
  opts.value.split(';')
    .map(prop=>prop.trim())
    .map(prop=>prop.split(': '))
    .map(keyValue=>styleObj[keyValue[0]]=keyValue[1])
  return styleObj
}

function markerArrow(){
  return (

    h('marker#markerArrow', {
      'markerWidth': '13',
      'markerHeight': '13',
      'refX': '10',
      'refY': '6',
      'orient': 'auto',
      'id': 'markerArrow',
    }, [
      h('path', {
        'd': 'M2,2 L2,11 L10,6 L2,2',
        'style': {
          'fill': '#000000',
        },
      })
    ])

  )
}

function renderNodes(){
  return (

    h('g', [

      h('circle', {
        'cx': '460',
        'cy': '220',
        'r': '20',
        'fill': '#26bf00',
        'stroke': '#26bf00',
        'style': {
          'fillOpacity': 0.4,
        },
      }),
      h('circle', {
        'cx': '360',
        'cy': '393.2',
        'r': '20',
        'fill': '#00bf2f',
        'stroke': '#00bf2f',
        'style': {
          'fillOpacity': 0.4,
        },
      }),
      h('circle', {
        'cx': '160',
        'cy': '393.2',
        'r': '20',
        'fill': '#00bf85',
        'stroke': '#00bf85',
        'style': {
          'fillOpacity': 0.4,
        },
      }),
      h('circle', {
        'cx': '60',
        'cy': '220',
        'r': '20',
        'fill': '#00a2bf',
        'stroke': '#00a2bf',
        'style': {
          'fillOpacity': 0.4,
        },
      }),
      h('circle', {
        'cx': '159.99999999999991',
        'cy': '46.79491924311233',
        'r': '20',
        'fill': '#004cbf',
        'stroke': '#004cbf',
        'style': {
          'fillOpacity': 0.4,
        },
      }),
      h('circle', {
        'cx': '360',
        'cy': '46.794919243112275',
        'r': '20',
        'fill': '#0900bf',
        'stroke': '#0900bf',
        'style': {
          'fillOpacity': 0.4,
        },
      }),

    ])

  )
}

function renderLabels(){
  return (

    h('g', [

      label({  
        'x': '460',
        'y': '220',
        'name': `AttackerProxy-f835`,
      }),
      label({  
        'x': '360',
        'y': '393.2',
        'name': `Attacker`,
      }),
      label({  
        'x': '160',
        'y': '393.2',
        'name': `TheDAO`,
      }),
      label({  
        'x': '60',
        'y': '220',
        'name': `DarkDAO`,
      }),
      label({  
        'x': '159.99999999999991',
        'y': '46.79491924311233',
        'name': `DarkDAO extraBalance`,
      }),
      label({  
        'x': '360',
        'y': '46.794919243112275',
        'name': `TheDAO rewardAccount`,
      }),

    ])

  )
}

function label(opts){
  return (

    h('text', {
      'attributes': {
        'x': opts.x,
        'y': opts.y,
        'textAnchor': 'start',
        'fontFamily': 'Arial',
        'fontSize': '10px',
        'stroke': 'none',
        'fill': '#ffffff',
        'font': '12px Fontin-Sans, Arial'
      },
      'style': styleFix({
        'name': 'style',
        'value': 'WebkitTapHighlightColor: rgba(0, 0, 0, 0); textAnchor: start; fontFamily: Fontin-Sans, Arial; fontSize: 12px; fontStyle: normal; fontVariant: normal; fontWeight: normal; fontStretch: normal; lineHeight: normal;'
      }),
    }, [
      h('tspan', {
        'attributes': {
          'dy': '4.013669243112275'
        },
        'style': styleFix({
          'name': 'style',
          'value': 'WebkitTapHighlightColor: rgba(0, 0, 0, 0);'
        }),
      }, opts.name)
    ])

  )
}

function renderPaths(){
  return (

    h('g', [
    // [

      path('link0', [460,220],[360,393.2]),
      path('link1', [460,220],[160,393.2]),
      path('link2', [160,393.2],[60,220]),

    ])
    // ]

  )
}

function path(id, start, end){
  return (

    h('path', {
      'id': id,
      'fill': 'none',
      'stroke': '#00bf85',
      'd': `M${start},${end}`,
      'stroke-width': '2',
      'style': {
        markerEnd: 'url(\'#markerArrow\')',
        opacity: 0.2,
      },
    })

  )
}

function renderPathLabels(){
  return (

    h('g', [

      pathLabel('link0', 'why hello there'),
      pathLabel('link1', 'why hello there'),
      pathLabel('link2', 'why hello there'),

    ])

  )
}

function pathLabel(id, label){
  return (

    h('text', {
      'attributes': {
        'dy': '-6'
      },
      'style': {
        'text-anchor': 'middle',
        'font': '16px sans-serif',
      },
    }, [
      h('textPath', {
        'xlink:href': `#${id}`,
        'startOffset': '50%',
      }, label)
    ])

  )
}
