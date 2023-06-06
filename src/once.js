import { gsap } from 'gsap'
import imagesLoaded from 'imagesloaded'
import SplitType from 'split-type'

import { lenis } from './assets/views/lenis'

const homeOnce = () => {
  lenis.stop()

  const page = document.querySelector('.once-home')
  const content = document.querySelector('.once-container')

  const letters = new SplitType('.once-title, .once-subtitle', {
    types: 'chars',
    tagName: 'span',
  })

  let title = letters.chars.slice(0, 15)
  let subtitle = letters.chars.slice(15)
  let mm = gsap.matchMedia()

  let tl = gsap.timeline({ paused: true, onComplete: () => lenis.start() })
  tl.from(title, {
    opacity: 0,
    duration: 0.2,
    ease: 'none',
    stagger: { amount: 0.6 },
  })
    .from(
      subtitle,
      {
        opacity: 0,
        duration: 0.2,
        ease: 'none',
        stagger: { amount: 0.7 },
      },
      '+=0.2'
    )
    .to(page, { yPercent: 100, duration: 0.8, ease: 'power2.inOut' }, '+=0.4')
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
  gsap.set(content, { opacity: 1 })
  imagesLoaded(
    document.querySelector('.barba-container'),
    { background: true },
    () => {
      tl.play()
    }
  )
}

export default homeOnce
