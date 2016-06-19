module.exports = ColorPalette

function ColorPalette(){
  var currentIndex = 0
  var pallete = ['#7cbf00', '#26bf00', '#00bf2f', '#00bf85', '#00a2bf', '#004cbf', '#0900bf', '#5f00bf', '#b500bf', '#bf0072', '#bf001c', '#bf2626']
  return {
    getColor: ()=>{currentIndex++; return pallete[currentIndex%pallete.length]},
    reset: ()=>{currentIndex=0},
  }
}