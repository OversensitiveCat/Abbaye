import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

// eslint-disable-next-line no-unused-vars
import { lenis } from './lenis'

const navMobile = (data) => {
  const header = data.next.container.querySelector('.header-mob-container'),
    navContainer = data.next.container.querySelector('.nav-mob-container'),
    ham = data.next.container.querySelector('.hamburger'),
    lines = Array.from(ham.querySelectorAll('.ham-line')),
    back = header.querySelectorAll('.nav-mob-background'),
    links = Array.from(
      navContainer.querySelectorAll('.nav-mob-li, .nav-mob-media-link')
    )

  let open = false

  let tl = gsap.timeline({
    paused: true,
    onStart: () => lenis.stop(),
    onReverseComplete: () => lenis.start(),
  })
  tl.set(header, { height: '100dvh' })
    .set(navContainer, { height: 'auto' })
    .fromTo(back, { opacity: 0 }, { opacity: 1 })
    .fromTo(
      lines[1],
      { opacity: 1 },
      { opacity: 0, duration: 0.3, ease: 'power1.inOut' },
      0
    )
    .fromTo(
      lines[0],
      { rotate: 0, top: 21 },
      { rotate: 45, top: 31, duration: 0.3, ease: 'power1.inOut' },
      0
    )
    .fromTo(
      lines[2],
      { rotate: 0, top: 41 },
      { rotate: -45, top: 31, duration: 0.3, ease: 'power1.inOut' },
      0
    )
    .fromTo(
      links,
      { autoAlpha: 0 },
      { autoAlpha: 1, stagger: { amount: 0.8 }, duration: 0.4 }
    )

  function anim() {
    if (!open) {
      tl.play()
      gsap.to(window, { scrollTo: 0, duration: 0.5, ease: 'power1.inOut' })
      open = true
    } else {
      tl.reverse()
      open = false
    }
  }
  ham.addEventListener('click', anim)
  links.forEach((l) => {
    l.addEventListener('click', () => lenis.start())
  })
}

export default navMobile
