const choo = require('choo')
const extend = require('xtend')
const async = require('async')
const ZeroClient = require('web3-provider-engine/zero')
const generateCallTrace = require('eth-tx-summary/call-trace')
const createElement = require('virtual-dom/create-element')
const h = require('virtual-dom/virtual-hyperscript')
const renderRoot = require('./views/root')
const addAbiData = require('./lib/add-abi-data')
const decorateCallTrace = require('./lib/decorate-call-trace')
const ABIs = require('./lib/abi')
const RPC_ENDPOINT = 'https://mainnet.infura.io/'


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
      callStack: null,
    },

    reducers: {
      setAutoplay: (action, state) => ({
        autoplay: action.value,
      }),
      setTargetTx: (action, state) => ({
        targetTx: action.value,
        traceData: null
      }),
      updateTraceData: (action, state) => {
        var traceData = action.traceData
        var frameIndex = action.frameIndex
        return {
          traceData: traceData,
          frameIndex: frameIndex,
          callStack: traceData.stackFrames[frameIndex].map((callIndex) => traceData.calls[callIndex]),
          activeLogs: traceData.logs.filter((log) => frameIndex >= log.stepIndex),
        }
      },
    },

    effects: {
      selectFrame: (data, state, send, done) => {
        var traceData = state.traceData
        var frameIndex = data.value
        send('viz:updateTraceData', { traceData, frameIndex }, done)
      },
      setTraceData: (data, state, send, done) => {
        var traceData = data.value
        var frameIndex = 0
        send('viz:updateTraceData', { traceData, frameIndex }, function(){
          send('viz:setAutoplay', { value: true }, done)
        })
      },
      loadTx: (data, state, send, done) => {
        var targetTx = data.value

        async.waterfall([
          (cb) => send('viz:setTargetTx', { value: targetTx }, cb),
          (_, cb) => generateCallTrace(targetTx, provider, cb),
          (callTrace, cb) => decorateCallTrace(callTrace, cb),
          (callTrace, cb) => send('viz:setTraceData', { value: callTrace }, cb),
        ], done)

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