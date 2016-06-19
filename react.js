const React = require('react')
const reactRender = require('react-dom').render
const h = require('react-hyperscript')

var container = document.createElement('div')
container.id = 'app-content'
document.body.appendChild(container)

// start app
reactRender(render(), container)

function render(){

  var circle = h.bind(null, 'circle')
  var defs = h.bind(null, 'defs')
  var desc = h.bind(null, 'desc')
  var linearGradient = h.bind(null, 'linearGradient')
  var marker = h.bind(null, 'marker')
  var path = h.bind(null, 'path')
  var stop = h.bind(null, 'stop')
  var svg = h.bind(null, 'svg')
  var text = h.bind(null, 'text')
  var tspan = h.bind(null, 'tspan')

  return (

    svg([
      h("desc", {
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0);"
        }),
      }, `Created with Raphaël 2.2.0`),
      h("defs", {
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0);"
        }),
      }, [
        h("linearGradient#grad", [
          h("stop", {
            "attributes": {
              "stop-color": "magenta"
            }
          }),
          h("stop", {
            "attributes": {
              "offset": "100%",
              "stop-color": "black"
            }
          })
        ]),
        h("marker#markerArrow", {
          "attributes": {
            "markerWidth": "13",
            "markerHeight": "13",
            "refX": "10",
            "refY": "6",
            "orient": "auto"
          },
          "id": {
            "name": "id",
            "value": "markerArrow"
          }
        }, [
          h("path", {
            "attributes": {
              "d": "M2,2 L2,11 L10,6 L2,2"
            },
            "style": styleFix({
              "name": "style",
              "value": "fill: #000000;"
            }),
          })
        ])
      ]),
      h("circle", {
        "attributes": {
          "cx": "460",
          "cy": "220",
          "r": "20",
          "fill": "#26bf00",
          "stroke": "#26bf00",
          "fillOpacity": "0.4"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); fillOpacity: 0.4;"
        }),
      }),
      h("circle", {
        "attributes": {
          "cx": "360",
          "cy": "393.2050807568877",
          "r": "20",
          "fill": "#00bf2f",
          "stroke": "#00bf2f",
          "fillOpacity": "0.4"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); fillOpacity: 0.4;"
        }),
      }),
      h("circle", {
        "attributes": {
          "cx": "160.00000000000006",
          "cy": "393.20508075688775",
          "r": "20",
          "fill": "#00bf85",
          "stroke": "#00bf85",
          "fillOpacity": "0.4"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); fillOpacity: 0.4;"
        }),
      }),
      h("circle", {
        "attributes": {
          "cx": "60",
          "cy": "220.00000000000003",
          "r": "20",
          "fill": "#00a2bf",
          "stroke": "#00a2bf",
          "fillOpacity": "0.4"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); fillOpacity: 0.4;"
        }),
      }),
      h("circle", {
        "attributes": {
          "cx": "159.99999999999991",
          "cy": "46.79491924311233",
          "r": "20",
          "fill": "#004cbf",
          "stroke": "#004cbf",
          "fillOpacity": "0.4"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); fillOpacity: 0.4;"
        }),
      }),
      h("circle", {
        "attributes": {
          "cx": "360",
          "cy": "46.794919243112275",
          "r": "20",
          "fill": "#0900bf",
          "stroke": "#0900bf",
          "fillOpacity": "0.4"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); fillOpacity: 0.4;"
        }),
      }),
      h("text", {
        "attributes": {
          "x": "460",
          "y": "220",
          "textAnchor": "start",
          "fontFamily": "\"Arial\"",
          "fontSize": "10px",
          "stroke": "none",
          "fill": "#ffffff",
          "font": "12px Fontin-Sans, Arial"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); textAnchor: start; fontFamily: Fontin-Sans, Arial; fontSize: 12px; fontStyle: normal; fontVariant: normal; fontWeight: normal; fontStretch: normal; lineHeight: normal;"
        }),
      }, [
        h("tspan", {
          "attributes": {
            "dy": "4"
          },
          "style": styleFix({
            "name": "style",
            "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0);"
          }),
        }, `AttackerProxy-f835`)
      ]),
      h("text", {
        "attributes": {
          "x": "360",
          "y": "393.2050807568877",
          "textAnchor": "start",
          "fontFamily": "\"Arial\"",
          "fontSize": "10px",
          "stroke": "none",
          "fill": "#ffffff",
          "font": "12px Fontin-Sans, Arial"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); textAnchor: start; fontFamily: Fontin-Sans, Arial; fontSize: 12px; fontStyle: normal; fontVariant: normal; fontWeight: normal; fontStretch: normal; lineHeight: normal;"
        }),
      }, [
        h("tspan", {
          "attributes": {
            "dy": "4.001955756887696"
          },
          "style": styleFix({
            "name": "style",
            "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0);"
          }),
        }, `Attacker`)
      ]),
      h("text", {
        "attributes": {
          "x": "160.00000000000006",
          "y": "393.20508075688775",
          "textAnchor": "start",
          "fontFamily": "\"Arial\"",
          "fontSize": "10px",
          "stroke": "none",
          "fill": "#ffffff",
          "font": "12px Fontin-Sans, Arial"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); textAnchor: start; fontFamily: Fontin-Sans, Arial; fontSize: 12px; fontStyle: normal; fontVariant: normal; fontWeight: normal; fontStretch: normal; lineHeight: normal;"
        }),
      }, [
        h("tspan", {
          "attributes": {
            "dy": "4.001955756887753"
          },
          "style": styleFix({
            "name": "style",
            "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0);"
          }),
        }, `TheDAO`)
      ]),
      h("text", {
        "attributes": {
          "x": "60",
          "y": "220.00000000000003",
          "textAnchor": "start",
          "fontFamily": "\"Arial\"",
          "fontSize": "10px",
          "stroke": "none",
          "fill": "#ffffff",
          "font": "12px Fontin-Sans, Arial"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); textAnchor: start; fontFamily: Fontin-Sans, Arial; fontSize: 12px; fontStyle: normal; fontVariant: normal; fontWeight: normal; fontStretch: normal; lineHeight: normal;"
        }),
      }, [
        h("tspan", {
          "attributes": {
            "dy": "4.000000000000028"
          },
          "style": styleFix({
            "name": "style",
            "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0);"
          }),
        }, `DarkDAO`)
      ]),
      h("text", {
        "attributes": {
          "x": "159.99999999999991",
          "y": "46.79491924311233",
          "textAnchor": "start",
          "fontFamily": "\"Arial\"",
          "fontSize": "10px",
          "stroke": "none",
          "fill": "#ffffff",
          "font": "12px Fontin-Sans, Arial"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); textAnchor: start; fontFamily: Fontin-Sans, Arial; fontSize: 12px; fontStyle: normal; fontVariant: normal; fontWeight: normal; fontStretch: normal; lineHeight: normal;"
        }),
      }, [
        h("tspan", {
          "attributes": {
            "dy": "4.013669243112332"
          },
          "style": styleFix({
            "name": "style",
            "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0);"
          }),
        }, `DarkDAO extraBalance`)
      ]),
      h("text", {
        "attributes": {
          "x": "360",
          "y": "46.794919243112275",
          "textAnchor": "start",
          "fontFamily": "\"Arial\"",
          "fontSize": "10px",
          "stroke": "none",
          "fill": "#ffffff",
          "font": "12px Fontin-Sans, Arial"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); textAnchor: start; fontFamily: Fontin-Sans, Arial; fontSize: 12px; fontStyle: normal; fontVariant: normal; fontWeight: normal; fontStretch: normal; lineHeight: normal;"
        }),
      }, [
        h("tspan", {
          "attributes": {
            "dy": "4.013669243112275"
          },
          "style": styleFix({
            "name": "style",
            "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0);"
          }),
        }, `TheDAO rewardAccount`)
      ]),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#26bf00",
          "d": "M460,220L360,393.2050807568877",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00bf2f",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00bf85",
          "d": "M160.00000000000006,393.20508075688775L60,220.00000000000003",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00a2bf",
          "d": "M60,220.00000000000003L159.99999999999991,46.79491924311233",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#004cbf",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#0900bf",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#5f00bf",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#b500bf",
          "d": "M360,46.794919243112275L460,220",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf0072",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf001c",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf2626",
          "d": "M160.00000000000006,393.20508075688775L60,220.00000000000003",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#7cbf00",
          "d": "M60,220.00000000000003L159.99999999999991,46.79491924311233",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#26bf00",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00bf2f",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00bf85",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00a2bf",
          "d": "M360,46.794919243112275L460,220",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#004cbf",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#0900bf",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#5f00bf",
          "d": "M160.00000000000006,393.20508075688775L60,220.00000000000003",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#b500bf",
          "d": "M60,220.00000000000003L159.99999999999991,46.79491924311233",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf0072",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf001c",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf2626",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#7cbf00",
          "d": "M360,46.794919243112275L460,220",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#26bf00",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00bf2f",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00bf85",
          "d": "M160.00000000000006,393.20508075688775L60,220.00000000000003",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00a2bf",
          "d": "M60,220.00000000000003L159.99999999999991,46.79491924311233",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#004cbf",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#0900bf",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#5f00bf",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#b500bf",
          "d": "M360,46.794919243112275L460,220",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf0072",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf001c",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf2626",
          "d": "M160.00000000000006,393.20508075688775L60,220.00000000000003",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#7cbf00",
          "d": "M60,220.00000000000003L159.99999999999991,46.79491924311233",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#26bf00",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00bf2f",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00bf85",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00a2bf",
          "d": "M360,46.794919243112275L460,220",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#004cbf",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#0900bf",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#5f00bf",
          "d": "M160.00000000000006,393.20508075688775L60,220.00000000000003",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#b500bf",
          "d": "M60,220.00000000000003L159.99999999999991,46.79491924311233",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf0072",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf001c",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf2626",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#7cbf00",
          "d": "M360,46.794919243112275L460,220",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#26bf00",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00bf2f",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00bf85",
          "d": "M160.00000000000006,393.20508075688775L60,220.00000000000003",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00a2bf",
          "d": "M60,220.00000000000003L159.99999999999991,46.79491924311233",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#004cbf",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#0900bf",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#5f00bf",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#b500bf",
          "d": "M360,46.794919243112275L460,220",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf0072",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf001c",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf2626",
          "d": "M160.00000000000006,393.20508075688775L60,220.00000000000003",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#7cbf00",
          "d": "M60,220.00000000000003L159.99999999999991,46.79491924311233",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#26bf00",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00bf2f",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00bf85",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00a2bf",
          "d": "M360,46.794919243112275L460,220",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#004cbf",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#0900bf",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#5f00bf",
          "d": "M160.00000000000006,393.20508075688775L60,220.00000000000003",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#b500bf",
          "d": "M60,220.00000000000003L159.99999999999991,46.79491924311233",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf0072",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf001c",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf2626",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#7cbf00",
          "d": "M360,46.794919243112275L460,220",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#26bf00",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00bf2f",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00bf85",
          "d": "M160.00000000000006,393.20508075688775L60,220.00000000000003",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00a2bf",
          "d": "M60,220.00000000000003L159.99999999999991,46.79491924311233",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#004cbf",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#0900bf",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#5f00bf",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#b500bf",
          "d": "M360,46.794919243112275L460,220",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf0072",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf001c",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf2626",
          "d": "M160.00000000000006,393.20508075688775L60,220.00000000000003",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#7cbf00",
          "d": "M60,220.00000000000003L159.99999999999991,46.79491924311233",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#26bf00",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00bf2f",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00bf85",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00a2bf",
          "d": "M360,46.794919243112275L460,220",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#004cbf",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#0900bf",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#5f00bf",
          "d": "M160.00000000000006,393.20508075688775L60,220.00000000000003",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#b500bf",
          "d": "M60,220.00000000000003L159.99999999999991,46.79491924311233",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf0072",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf001c",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf2626",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#7cbf00",
          "d": "M360,46.794919243112275L460,220",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#26bf00",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00bf2f",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00bf85",
          "d": "M160.00000000000006,393.20508075688775L60,220.00000000000003",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00a2bf",
          "d": "M60,220.00000000000003L159.99999999999991,46.79491924311233",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#004cbf",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#0900bf",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#5f00bf",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#b500bf",
          "d": "M360,46.794919243112275L460,220",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf0072",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf001c",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf2626",
          "d": "M160.00000000000006,393.20508075688775L60,220.00000000000003",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#7cbf00",
          "d": "M60,220.00000000000003L159.99999999999991,46.79491924311233",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#26bf00",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00bf2f",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00bf85",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00a2bf",
          "d": "M360,46.794919243112275L460,220",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#004cbf",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#0900bf",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#5f00bf",
          "d": "M160.00000000000006,393.20508075688775L60,220.00000000000003",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#b500bf",
          "d": "M60,220.00000000000003L159.99999999999991,46.79491924311233",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf0072",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf001c",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf2626",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#7cbf00",
          "d": "M360,46.794919243112275L460,220",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#26bf00",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00bf2f",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00bf85",
          "d": "M160.00000000000006,393.20508075688775L60,220.00000000000003",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00a2bf",
          "d": "M60,220.00000000000003L159.99999999999991,46.79491924311233",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#004cbf",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#0900bf",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#5f00bf",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#b500bf",
          "d": "M360,46.794919243112275L460,220",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf0072",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf001c",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf2626",
          "d": "M160.00000000000006,393.20508075688775L60,220.00000000000003",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#7cbf00",
          "d": "M60,220.00000000000003L159.99999999999991,46.79491924311233",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#26bf00",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00bf2f",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00bf85",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00a2bf",
          "d": "M360,46.794919243112275L460,220",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#004cbf",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#0900bf",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#5f00bf",
          "d": "M160.00000000000006,393.20508075688775L60,220.00000000000003",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#b500bf",
          "d": "M60,220.00000000000003L159.99999999999991,46.79491924311233",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf0072",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf001c",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf2626",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#7cbf00",
          "d": "M360,46.794919243112275L460,220",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#26bf00",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00bf2f",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00bf85",
          "d": "M160.00000000000006,393.20508075688775L60,220.00000000000003",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00a2bf",
          "d": "M60,220.00000000000003L159.99999999999991,46.79491924311233",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#004cbf",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#0900bf",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#5f00bf",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#b500bf",
          "d": "M360,46.794919243112275L460,220",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf0072",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf001c",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf2626",
          "d": "M160.00000000000006,393.20508075688775L60,220.00000000000003",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#7cbf00",
          "d": "M60,220.00000000000003L159.99999999999991,46.79491924311233",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#26bf00",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00bf2f",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00bf85",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00a2bf",
          "d": "M360,46.794919243112275L460,220",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#004cbf",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#0900bf",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#5f00bf",
          "d": "M160.00000000000006,393.20508075688775L60,220.00000000000003",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#b500bf",
          "d": "M60,220.00000000000003L159.99999999999991,46.79491924311233",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf0072",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf001c",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf2626",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#7cbf00",
          "d": "M360,46.794919243112275L460,220",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#26bf00",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00bf2f",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00bf85",
          "d": "M160.00000000000006,393.20508075688775L60,220.00000000000003",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00a2bf",
          "d": "M60,220.00000000000003L159.99999999999991,46.79491924311233",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#004cbf",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#0900bf",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#5f00bf",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#b500bf",
          "d": "M360,46.794919243112275L460,220",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf0072",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf001c",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf2626",
          "d": "M160.00000000000006,393.20508075688775L60,220.00000000000003",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#7cbf00",
          "d": "M60,220.00000000000003L159.99999999999991,46.79491924311233",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#26bf00",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00bf2f",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00bf85",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00a2bf",
          "d": "M360,46.794919243112275L460,220",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#004cbf",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#0900bf",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#5f00bf",
          "d": "M160.00000000000006,393.20508075688775L60,220.00000000000003",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#b500bf",
          "d": "M60,220.00000000000003L159.99999999999991,46.79491924311233",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf0072",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf001c",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf2626",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#7cbf00",
          "d": "M360,46.794919243112275L460,220",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#26bf00",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00bf2f",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00bf85",
          "d": "M160.00000000000006,393.20508075688775L60,220.00000000000003",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00a2bf",
          "d": "M60,220.00000000000003L159.99999999999991,46.79491924311233",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#004cbf",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#0900bf",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#5f00bf",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#b500bf",
          "d": "M360,46.794919243112275L460,220",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf0072",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf001c",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf2626",
          "d": "M160.00000000000006,393.20508075688775L60,220.00000000000003",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#7cbf00",
          "d": "M60,220.00000000000003L159.99999999999991,46.79491924311233",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#26bf00",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00bf2f",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00bf85",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00a2bf",
          "d": "M360,46.794919243112275L460,220",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#004cbf",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#0900bf",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#5f00bf",
          "d": "M160.00000000000006,393.20508075688775L60,220.00000000000003",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#b500bf",
          "d": "M60,220.00000000000003L159.99999999999991,46.79491924311233",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf0072",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf001c",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf2626",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#7cbf00",
          "d": "M360,46.794919243112275L460,220",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#26bf00",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00bf2f",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00bf85",
          "d": "M160.00000000000006,393.20508075688775L60,220.00000000000003",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00a2bf",
          "d": "M60,220.00000000000003L159.99999999999991,46.79491924311233",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#004cbf",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#0900bf",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#5f00bf",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#b500bf",
          "d": "M360,46.794919243112275L460,220",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf0072",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf001c",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#bf2626",
          "d": "M160.00000000000006,393.20508075688775L60,220.00000000000003",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#7cbf00",
          "d": "M60,220.00000000000003L159.99999999999991,46.79491924311233",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#26bf00",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00bf2f",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00bf85",
          "d": "M160.00000000000006,393.20508075688775L360,46.794919243112275",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#00a2bf",
          "d": "M360,46.794919243112275L460,220",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#004cbf",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#0900bf",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      }),
      h("path", {
        "attributes": {
          "fill": "none",
          "stroke": "#5f00bf",
          "d": "M460,220L160.00000000000006,393.20508075688775",
          "stroke-width": "2"
        },
        "style": styleFix({
          "name": "style",
          "value": "WebkitTapHighlightColor: rgba(0, 0, 0, 0); markerEnd: url(\"#markerArrow\"); opacity: 0.2;"
        }),
      })
    ])

  )
}

function svg(children){
  return (

    h("svg", {
      // "attributes": {
        "height": "480",
        "version": "1.1",
        "width": "640",
        "xmlns": "http://www.w3.org/2000/svg",
        "xlink": "http://www.w3.org/1999/xlink",
      // },
      "style": {
        overflow: 'hidden',
        position: 'relative',
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