import './styles/styles.styl'
import router from './routes/index.js'
import script from './js/script.js'
//Para saber que ya cargo la pagina, si ya se lanza la funcion router
async function load() {
    await router()
    script()
}
window.addEventListener('load', load) //cuando carga por primera vez
window.addEventListener('hashchange', router) //cuando hay un cambio en el hash
