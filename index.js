const choo = require('choo')
const extend = require('xtend')
const ZeroClient = require('web3-provider-engine/zero')
const generateCallTrace = require('eth-tx-summary/call-trace')
const createElement = require('virtual-dom/create-element')
const h = require('virtual-dom/virtual-hyperscript')
const renderRoot = require('./views/root')
const addAbiData = require('./lib/add-abi-data')
const ABIs = require('./lib/abi')
const RPC_ENDPOINT = 'https://morden.infura.io/'


var app = undefined
var provider = undefined
window.addEventListener('load', setupProvider)



function setupProvider(){

  if (global.web3) {
    provider = global.web3.currentProvider
    console.log('using environmental web3')
  } else {
    provider = ZeroClient({ rpcUrl: RPC_ENDPOINT })
    console.log('using zero client')
  }

  setupApp()

}

function setupApp(){

  app = choo()

  app.model({
    namespace: 'viz',
    state: {
      frameIndex: 0,
      autoplay: true,
      targetTx: null,
      traceData: null,
      // accounts: extend(traceData.accounts),
      // stackFrames: traceData.stackFrames,
      // allCalls: traceData.calls,
    },
    reducers: {
      setAutoplay: (action, state) => ({ autoplay: action.value }),
      selectFrame: (action, state) => ({ frameIndex: action.value }),
      setTargetTx: (action, state) => ({
        targetTx: action.value,
        traceData: null
      }),
      setTraceData: (action, state) => ({
        frameIndex: 0,
        autoplay: true,
        traceData: action.value,
      }),
    },
    effects: {
      loadTx: (data, state, send, done) => {
        var targetTx = data.value
        send('viz:setTargetTx', { value: targetTx }, function(){
          generateCallTrace(targetTx, provider, function(err, callTrace){
            if (err) throw err
            // decorate calls with ABI-sourced data
            addAbiData(callTrace.calls, ABIs)
            send('viz:setTraceData', { value: callTrace }, done)
          })
        })
      },
      tick: (data, state, send, done) => {
        if (state.autoplay && state.traceData && state.frameIndex < (state.traceData.stackFrames.length-1)) {
          send('viz:selectFrame', { value: state.frameIndex+1 }, done)
          return
        }
        done()
      },
      navigateToTx: (data, state, send, done) => {
        var targetTx = data.value
        var newurl = window.location.origin + window.location.pathname + '?tx='+targetTx
        window.history.pushState({ path: newurl }, '', newurl)
        send('viz:loadTx', { value: targetTx }, done)
      },
    },
    subscriptions: [
      (send) => {
        setInterval(() => {
          send('viz:tick', noop)
        }, 1000)
      }
    ],
  })

  app.router((route) => [
    route('/', function(state, prev, send){
      // check for changes to query params state
      var query = parseQs(state.location.pathname)
      var newTargetTx = query.tx
      var currentTargetTx = state.viz.targetTx
      if (newTargetTx && newTargetTx !== currentTargetTx) send('viz:loadTx', { value: newTargetTx }, noop)
      return view(state, prev, send)
    }),
  ])

  var tree = app.start()
  document.body.appendChild(tree)
}

function view (state, params, send) {
  return createElement(

    renderRoot(state.viz, send)

  )
} 

function noop(){}

// decode a uri into a kv representation :: str -> obj
function parseQs(uri){
  const decodeURIComponent = window.decodeURIComponent
  const reg = new RegExp('([^?=&]+)(=([^&]*))?', 'g')

  const obj = {}
  uri.replace(/^.*\?/, '').replace(reg, map)
  return obj

  function map (a0, a1, a2, a3) {
    obj[decodeURIComponent(a1)] = decodeURIComponent(a3)
  }
}