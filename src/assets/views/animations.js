import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const eventHover = () => {
  const events = gsap.utils.toArray('[data-hover]')
  events.forEach((e) => {
    let cross = e.querySelector('.event-more')
    e.addEventListener('mouseenter', () => {
      gsap.to(cross, {
        scale: 1.2,
        rotate: 90,
        transformOrigin: 'center',
        duration: 0.35,
      })
    })
    e.addEventListener('mouseleave', () => {
      gsap.to(cross, {
        scale: 1,
        rotate: 0,
        transformOrigin: 'center',
        duration: 0.35,
      })
    })
  })
}

export default eventHover
