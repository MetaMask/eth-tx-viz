module.exports = ColorPalette

function ColorPalette(){
  var currentIndex = 0
  var pallete = ['#FA6B16', '#FBB508', '#6A9DD3', '#2741CA', '#1AB76C', '#AB1A6A', '#EA3D3A', '#5f00bf', '#b500bf', '#bf0072', '#bf001c', '#bf2626']
  return {
    getColor: ()=>{currentIndex++; return pallete[currentIndex%pallete.length]},
    reset: ()=>{currentIndex=0},
  }
}