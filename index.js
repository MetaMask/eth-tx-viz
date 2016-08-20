const choo = require('choo')
const extend = require('xtend')
const ZeroClient = require('web3-provider-engine/zero')
const generateCallTrace = require('eth-tx-summary/call-trace')
const createElement = require('virtual-dom/create-element')
const h = require('virtual-dom/virtual-hyperscript')
const renderRoot = require('./views/root')
const addAbiData = require('./lib/add-abi-data')
const ABIs = require('./lib/abi')
const traceData = require('./trace.json')

const RPC_ENDPOINT = 'http://localhost:8545/'
var provider = ZeroClient({ rpcUrl: RPC_ENDPOINT })


// decorate calls with ABI-sourced data
addAbiData(traceData.calls, ABIs)

const app = choo()

app.model({
  namespace: 'viz',
  state: {
    accounts: extend(traceData.accounts),
    stackFrames: traceData.stackFrames,
    allCalls: traceData.calls,
    frameIndex: 0,
    autoplay: true,
  },
  reducers: {
    setAutoplay: (action, state) => ({ autoplay: action.value }),
    selectFrame: (action, state) => ({ frameIndex: action.value }),
    setTraceData: (action, state) => ({
      frameIndex: 0,
      autoplay: true,
      accounts: action.value.accounts,
      stackFrames: action.value.stackFrames,
      allCalls: action.value.calls,
    }),
  },
  effects: {
    loadTx: (data, state, send, done) => {
      var targetTx = data.value
      send('viz:setAutoplay', { value: false })
      generateCallTrace(targetTx, provider, function(err, callTrace){
        if (err) throw err
        addAbiData(callTrace.calls, ABIs)
        send('viz:setTraceData', { value: callTrace })
      })
    }
  },
  subscriptions: [
    (send) => setInterval(() => {
      var state = send.state().viz
      if (state.autoplay && state.frameIndex < (state.stackFrames.length-1)) {
        send('viz:selectFrame', { value: state.frameIndex+1 })
      }
    }, 1000)
  ],
})

app.router((route) => [
  route('/', view)
])

var tree = app.start()
document.body.appendChild(tree)


function view (params, state, send) {
  return createElement(

    renderRoot(state.viz, send)

  )
} 