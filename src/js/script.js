const $forwardBtn = document.getElementById('forward')
const $backwardBtn = document.getElementById('backward')
const $stripSmall = document.getElementById('carouselSmall')
const $stripBig = document.getElementById('carouselBig')
let moveSmall = 0
let moveBig = 0

function move(direction) {
  const smallImageWidth = parseInt($stripSmall.childNodes[1].clientWidth)
  const bigImageWidth = parseInt($stripBig.childNodes[1].clientWidth)
  if(direction === 'forwards') {
    moveSmall = moveSmall - smallImageWidth
    moveBig = moveBig - bigImageWidth
    $stripSmall.style.transform = `translateX(${moveSmall.toString()}px)`
    $stripBig.style.transform = `translateX(${moveBig.toString()}px)`
  }
  else if(direction === 'backwards') {
    moveSmall = smallImageWidth + moveSmall
    moveBig = bigImageWidth + moveBig
    console.log(moveBig)
    $stripSmall.style.transform = `translateX(${moveSmall.toString()}px)`
    $stripBig.style.transform = `translateX(${moveBig.toString()}px)`
  }
}

$forwardBtn.addEventListener('click', () => {
  move('forwards')
})
$backwardBtn.addEventListener('click', () => {
  move('backwards')
})
