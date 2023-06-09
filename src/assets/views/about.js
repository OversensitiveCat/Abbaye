import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

const about = () => {
  const l = document.querySelector('.about .italic')
  l.addEventListener('click', () => {
    gsap.to(window, {
      scrollTo: '.association',
      ease: 'power1.inOut',
      duration: 1,
    })
  })
}

export default about
