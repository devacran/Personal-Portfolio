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

export default toggleMenu
