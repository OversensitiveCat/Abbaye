import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

const eventHover = () => {
  const elements = gsap.utils.toArray('[data-hover]')
  function data(e) {
    return e.dataset.hover == 'event'
  }
  const events = elements.filter(data)
  events.forEach((e) => {
    let back = e.querySelector('.back')
    let front = e.querySelector('.front')
    let tl = gsap.timeline()
    e.addEventListener('mouseenter', () => {
      tl.to(back, {
        attr: { fill: '#191818' },
        duration: 0.3,
        ease: 'none',
      }).to(
        front,
        {
          attr: { fill: '#f4f4f4' },
          duration: 0.3,
          ease: 'none',
        },
        0
      )
    })
    e.addEventListener('mouseleave', () => {
      tl.to(back, {
        attr: { fill: '#f4f4f4' },
        duration: 0.3,
        ease: 'none',
      }).to(
        front,
        {
          attr: { fill: '#191818' },
          duration: 0.3,
          ease: 'none',
        },
        0
      )
    })
  })
}

const arrowDownHover = () => {
  let l = document.querySelector('[data-hover="down"]')
  let a = l.querySelector('.link-arrow')
  l.addEventListener('mouseenter', () => {
    gsap.fromTo(
      a,
      { scale: 1, yPercent: 0 },
      {
        scale: 1.1,
        yPercent: 20,
        transformOrigin: 'center',
        ease: 'none',
        duration: 0.3,
      }
    )
  })
  l.addEventListener('mouseleave', () => {
    gsap.fromTo(
      a,
      { scale: 1.1, yPercent: 20 },
      {
        scale: 1,
        yPercent: 0,
        transformOrigin: 'center',
        ease: 'none',
        duration: 0.3,
      }
    )
  })
  l.addEventListener('click', () => {
    gsap.to(window, {
      scrollTo: '#next-saison',
      ease: 'power1.inOut',
      duration: 1,
    })
  })
}

const arrowRoundHover = () => {
  let l = document.querySelector('[data-hover="round"]')
  let a = l.querySelector('.link-arrow')
  gsap.set(a, { rotateY: -180, rotate: -140 })

  let tl = gsap.timeline()
  l.addEventListener('mouseenter', () => {
    tl.fromTo(
      l,
      { rotate: -13 },
      {
        rotate: -30,
        transformOrigin: 'center',
        ease: 'none',
        duration: 0.3,
      }
    ).fromTo(
      a,
      { scale: 1 },
      {
        scale: 1.1,
        transformOrigin: 'center',
        ease: 'none',
        duration: 0.3,
      },
      0
    )
  })
  l.addEventListener('mouseleave', () => {
    tl.fromTo(
      l,
      { rotate: -30 },
      {
        rotate: -13,
        transformOrigin: 'center',
        ease: 'none',
        duration: 0.3,
      }
    ).fromTo(
      a,
      { scale: 1.1 },
      {
        scale: 1,
        transformOrigin: 'center',
        ease: 'none',
        duration: 0.3,
      },
      0
    )
  })
}

const arrowUpHover = () => {
  let links = document.querySelectorAll('[data-hover="up"]')
  links.forEach((l) => {
    let a = l.querySelector('.link-arrow')
    gsap.set(a, { rotateY: -180, rotate: -140 })
    l.addEventListener('mouseenter', () => {
      gsap.fromTo(
        a,
        { scale: 1, rotate: -140 },
        {
          scale: 1.1,
          rotate: -160,
          transformOrigin: 'center',
          ease: 'none',
          duration: 0.3,
        }
      )
    })
    l.addEventListener('mouseleave', () => {
      gsap.fromTo(
        a,
        { scale: 1.1, rotate: -160 },
        {
          scale: 1,
          rotate: -140,
          transformOrigin: 'center',
          ease: 'none',
          duration: 0.3,
        }
      )
    })
  })
}

export { eventHover, arrowRoundHover, arrowDownHover, arrowUpHover }
