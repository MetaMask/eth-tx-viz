const choo = require('choo')
const extend = require('xtend')
const traceData = require('./trace.json')
const createElement = require('virtual-dom/create-element')
const h = require('virtual-dom/virtual-hyperscript')
const renderRoot = require('./views/root')
const addAbiData = require('./lib/add-abi-data')
const ABIs = require('./lib/abi')

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

var container = document.createElement('div')
document.body.appendChild(container)
container.id = 'app-container'
app.start('#app-container')


function view (params, state, send) {
  return createElement(

    h('#app-container', [
      renderRoot(state.viz, send)
    ])

  )
} 