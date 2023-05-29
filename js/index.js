import { Router } from './router.js'

const bg1 = 'url("./assets/mountains-universe-1.png")'
const bg2 = 'url("./assets/mountains-universe-2.png")'
const bg3 = 'url("./assets/mountains-universe-3.png")'

const router = new Router()
router.add('/', "/pages/home.html",bg1)
router.add("/universe", "/pages/universe.html",bg2)
router.add("/exploration", "/pages/exploration.html",bg3)
router.add(404, "/pages/404.html",bg1)

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()