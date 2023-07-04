import { gsap } from 'gsap'

const diapo = () => {
  const imgs = gsap.utils.toArray('.hero-img-wrapper > img')
  let tl = gsap.timeline({ repeat: -1 })
  tl.to(imgs[0], { opacity: 0, duration: 1, ease: 'none' }, '+=3')
    .to(imgs[1], { opacity: 1, duration: 1, ease: 'none' }, '<')
    .to(imgs[1], { opacity: 0, duration: 1, ease: 'none' }, '+=3')
    .to(imgs[2], { opacity: 1, duration: 1, ease: 'none' }, '<')
    .to(imgs[2], { opacity: 0, duration: 1, ease: 'none' }, '+=3')
    .to(imgs[3], { opacity: 1, duration: 1, ease: 'none' }, '<')
    .to(imgs[3], { opacity: 0, duration: 1, ease: 'none' }, '+=3')
    .to(imgs[0], { opacity: 1, duration: 1, ease: 'none' }, '<')
}

export default diapo
