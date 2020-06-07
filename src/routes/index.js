import Header from '../templates/Header'
import Home from '../pages/Home'
import Footer from '../templates/Footer'
import About from '../pages/About'

import getHash from '../utils/getHash'
import resolveRoute from '../utils/resolveRoute'

const routes = {
    '/': Home,
    '/about': About,
}

const router = async () => {
    const $header = null || document.getElementById('Header')
    // const $footer = null || document.getElementById("Footer");
    const $app = null || document.getElementById('App')

    $header.innerHTML = await Header()
    // $footer.innerHTML = await Footer();

    let hash = await getHash()
    let route = await resolveRoute(hash)
    console.log(route)
    let render = routes[route] ? routes[route] : 'Error 404'

    $app.innerHTML = await render()
}

export default router
