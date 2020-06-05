import './styles/styles.css'
import router from './routes/index.js'
//Para saber que ya cargo la pagina, si ya se lanza la funcion router
window.addEventListener('load', router) //cuando carga por primera vez
window.addEventListener('hashchange', router) //cuando hay un cambio en el hash
