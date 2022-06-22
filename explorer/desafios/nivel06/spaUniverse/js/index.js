import  { Router }  from "./router.js";
const bg = document.querySelector('body')
const linkHome = document.querySelector('.link-home')
const linkExploracao = document.querySelector('.link-exploracao')
const linkUniverso = document.querySelector('.link-universo')

const router = new Router()

router.add('/', "/pages/home.html")
router.add('/universo', "pages/universo.html")
router.add('/exploracao', "/pages/exploracao.html")
router.add(404 ,"/pages/404.html")


router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

function removeBg() {
  bg.classList.remove('bg1')
  bg.classList.remove('bg2')
  bg.classList.remove('bg3')
}

function removeActive() {
  linkHome.classList.remove('active')
  linkExploracao.classList.remove('active')
  linkUniverso.classList.remove('active')
}

linkHome.addEventListener('click', function() {
  removeBg()
  removeActive()
  bg.classList.add('bg1')
  linkHome.classList.add('active')
})

linkUniverso.addEventListener('click', function() {
  removeBg()
  removeActive()
  bg.classList.add('bg2')
  linkUniverso.classList.add('active')
})

linkExploracao.addEventListener('click', function() {
  removeBg()
  removeActive()
  bg.classList.add('bg3')
  linkExploracao.classList.add('active')
})








