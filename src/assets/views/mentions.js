import { gsap } from 'gsap'

const drop = () => {
  let links = gsap.utils.toArray('.mention-link-drop')
  links.forEach((l) => {
    let open = false
    let block = l.parentElement
    let arrow = l.lastChild
    function anim() {
      let tl = gsap.timeline()
      if (!open) {
        tl.to(block, { height: 'auto' }).to(
          arrow,
          { transformOrigin: 'center', rotate: 180 },
          0
        )
        open = true
      } else {
        tl.to(block, { height: '56px' }).to(
          arrow,
          { transformOrigin: 'center', rotate: 0 },
          0
        )
        open = false
      }
    }
    l.addEventListener('click', anim)
  })
}

export default drop
