import { gsap } from 'gsap'

const page = document.querySelector('.transition-page')
const content = document.querySelector('.transition-content')

const leave = (data, done) => {
  let tl = gsap.timeline({
    onComplete: () => {
      data.current.container.remove()
      window.scrollTo(0, 0)
      done()
    },
  })
  tl.set(page, { zIndex: 10 })
    .fromTo(
      page,
      { yPercent: -100 },
      { yPercent: 0, duration: 0.8, ease: 'power2.inOut' }
    )
    .fromTo(
      content,
      { yPercent: 80 },
      { yPercent: 0, duration: 0.8, ease: 'power2.inOut' },
      '<'
    )
    .to(data.current.container, { opacity: 0, duration: 0.8 }, '-=0.3')
}

const enter = (data) => {
  let tl = gsap.timeline()
  tl.fromTo(
    page,
    { yPercent: 0 },
    { yPercent: 100, duration: 0.8, ease: 'power2.inOut' }
  )
    .fromTo(
      content,
      { yPercent: 0 },
      { yPercent: -80, duration: 0.8, ease: 'power2.inOut' },
      '<'
    )
    .from(data.next.container, { opacity: 0, duration: 1 }, '-=0.8')
    .set(page, { zIndex: -2, yPercent: 0 })
}

export { leave, enter }
