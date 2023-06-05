import Lenis from '@studio-freight/lenis'

const lenis = new Lenis({
  duration: 1.5,
  wheelMultiplier: 0.5,
  touchMultiplier: 3,
})

const setLenis = () => {
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
  // document.querySelector('html').style.height = 'auto'
}

export { lenis, setLenis }
