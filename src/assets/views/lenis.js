import Lenis from '@studio-freight/lenis'

const setLenis = () => {
  const lenis = new Lenis({
    duration: 1.5,
    wheelMultiplier: 0.5,
    touchMultiplier: 3,
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
}

export { setLenis }
