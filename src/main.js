import barba from '@barba/core'
import barbaPrefetch from '@barba/prefetch'
import { gsap } from 'gsap'

import { leave, enter } from './assets/transitions/transitions'
import { setLenis } from './assets/views/lenis'

function delay(t, f) {
  gsap.delayedCall(t, f)
}

setLenis()

barba.use(barbaPrefetch)

barba.hooks.afterLeave(() => {
  window.scrollTo(0, 0)
})

barba.hooks.after(() => {
  delay(1, setLenis)
})

barba.init({
  debug: true,
  timeout: 4000,
  views: [],
  transitions: [
    {
      name: 'default',
      leave(data) {
        const done = this.async()
        leave(data, done)
      },
      enter(data) {
        enter(data)
      },
    },
  ],
})
