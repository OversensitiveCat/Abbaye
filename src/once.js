import { gsap } from 'gsap'
import imagesLoaded from 'imagesloaded'

import { lenis } from './assets/views/lenis'

const homeOnce = () => {
  lenis.stop()

  const page = document.querySelector('.once-home'),
    content = document.querySelector('.once-container'),
    title = gsap.utils.toArray('.once-title'),
    logo = document.querySelector('.once-logo')

  let mm = gsap.matchMedia()

  let tl = gsap.timeline({
    paused: true,
    onComplete: () => {
      lenis.start(), gsap.set(content, { opacity: 0 })
    },
  })
  tl.set(content, { opacity: 1 })
    .from(title, {
      delay: 0.6,
      opacity: 0,
      duration: 0.7,
      ease: 'power1.inOut',
      stagger: 0.4,
      rotateX: -60,
    })
    .from(
      logo,
      {
        opacity: 0,
        yPercent: 60,
        duration: 0.55,
        ease: 'none',
      },
      '-=0.55'
    )
    .to(page, { yPercent: 100, duration: 1, ease: 'power2.inOut' }, '+=0.5')
    .to(content, { yPercent: -80, duration: 0.8, ease: 'power2.inOut' }, '<')
    .set(page, { zIndex: -2, yPercent: 0 })
  mm.add('(min-width: 992px)', () => {
    tl.from(
      '.header',
      { yPercent: -10, opacity: 0, duration: 0.8 },
      '-=0.4'
    ).from(
      '.header .nav-link',
      { xPercent: 10, opacity: 0, duration: 0.4, stagger: { amount: 0.6 } },
      '-=0.8'
    )
  })
  mm.add('(max-width: 991px)', () => {
    tl.from(
      '.header-mob-container',
      { yPercent: -10, opacity: 0, duration: 0.8 },
      '-=0.4'
    )
  })
  tl.from(
    '.hero-section > img',
    { scale: 0.5, opacity: 0, duration: 1 },
    '-=0.6'
  )
    .from(
      '.hero-section .big-para',
      {
        yPercent: 50,
        opacity: 0,
        duration: 0.8,
      },
      '<'
    )
    .from(
      '.hero-section .link-bottom',
      {
        yPercent: 50,
        opacity: 0,
        duration: 0.8,
      },
      '-=0.5'
    )

  imagesLoaded(
    document.querySelector('.barba-container'),
    { background: true },
    () => {
      tl.play()
    }
  )
}

export default homeOnce
