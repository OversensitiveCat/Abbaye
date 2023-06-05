// eslint-disable-next-line no-unused-vars
import { gsap } from 'gsap'

const filterMob = () => {
  let mm = gsap.matchMedia()
  mm.add('(max-width: 991px)', () => {
    const filter = document.querySelector('.filter'),
      fields = gsap.utils.toArray('.year-field'),
      linesOne = [fields[0], fields[1], fields[2]],
      linesTwo = [fields[3], fields[4], fields[5]],
      linesThree = [fields[6], fields[7], fields[8]],
      linesFour = [fields[9], fields[10], fields[11]]

    let open = false

    let tl = gsap.timeline({ paused: true })
    tl.fromTo(
      '.filter-container',
      { height: 64 },
      { height: 'auto', duration: 0.5, ease: 'power1.inOut' }
    )
      .fromTo(
        '.filter > .filter-arrow',
        { rotate: -90 },
        { rotate: -270, duration: 0.5, ease: 'power1.inOut' },
        0
      )
      .fromTo(
        '.reset',
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.5, ease: 'power1.inOut' },
        '-=0.35'
      )
      .fromTo(
        linesOne,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.5, ease: 'power1.inOut' },
        '-=0.35'
      )
      .fromTo(
        linesTwo,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.5, ease: 'power1.inOut' },
        '-=0.35'
      )
      .fromTo(
        linesThree,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.5, ease: 'power1.inOut' },
        '-=0.35'
      )
      .fromTo(
        linesFour,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.5, ease: 'power1.inOut' },
        '-=0.35'
      )
    function anim() {
      if (!open) {
        tl.play()
        open = true
      } else {
        tl.reverse()
        open = false
      }
    }
    filter.addEventListener('click', anim)
  })
}

export default filterMob
