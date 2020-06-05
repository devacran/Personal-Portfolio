function script() {
    const $menu = document.getElementById('menu')
    const $navbarSide = document.querySelector('.navbar--side')
    const $forwardBtn = document.getElementById('forward')
    const $backwardBtn = document.getElementById('backward')
    const $stripSmall = document.getElementById('carouselSmall')
    const $stripBig = document.getElementById('carouselBig')
    const $sections = document.querySelectorAll('section')
    const $aboutTitle = document.getElementById('about')
    let moveSmall = 0
    let moveBig = 0

    function move(direction) {
        const smallImageWidth = parseInt($stripSmall.childNodes[1].clientWidth)
        const bigImageWidth = parseInt($stripBig.childNodes[1].clientWidth)
        if (direction === 'forwards') {
            moveSmall = moveSmall - smallImageWidth
            moveBig = moveBig - bigImageWidth
            $stripSmall.style.transform = `translateX(${moveSmall.toString()}px)`
            $stripBig.style.transform = `translateX(${moveBig.toString()}px)`
        } else if (direction === 'backwards') {
            moveSmall = smallImageWidth + moveSmall
            moveBig = bigImageWidth + moveBig
            $stripSmall.style.transform = `translateX(${moveSmall.toString()}px)`
            $stripBig.style.transform = `translateX(${moveBig.toString()}px)`
        }
    }

    function toggleMenu() {
        const menuWidth = parseInt($navbarSide.offsetWidth)
        if ($menu.getAttribute('toggle') === 'false') {
            Array.prototype.forEach.call($sections, (section) => {
                section.style.transition = '0.5s'
                section.style.transform = `translateX(-${menuWidth}px)`
            })
            if ($aboutTitle) {
                const aboutTitleHeight = $aboutTitle.offsetHeight + 25
                $aboutTitle.style.transition = '0.5s'
                $aboutTitle.style.transform = `rotateZ(-90deg) translate(0px, -${aboutTitleHeight}px)`
            }
            $menu.setAttribute('toggle', 'true')
            $navbarSide.style.zIndex = 0
        } else {
            Array.prototype.forEach.call($sections, (section) => {
                section.style.transform = 'translateX(0)'
            })
            if ($aboutTitle) {
                $aboutTitle.style.transform = `rotateZ(-90deg) translate(0px,0px)`
                $navbarSide.style.zIndex = -1
            }
            $menu.setAttribute('toggle', 'false')
        }
    }
    if ($forwardBtn) {
        $forwardBtn.addEventListener('click', () => {
            move('forwards')
        })
        $backwardBtn.addEventListener('click', () => {
            move('backwards')
        })
    }
    $menu.addEventListener('click', toggleMenu)
}
export default script
