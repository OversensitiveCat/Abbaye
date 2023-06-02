import barba from '@barba/core'
import barbaPrefetch from '@barba/prefetch'
import { gsap } from 'gsap'

import { leave, enter } from './assets/transitions/transitions'
import eventHover from './assets/views/animations'
import eventsFilter from './assets/views/events'
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
  timeout: 4000,
  views: [
    {
      namespace: 'home',
      afterEnter() {
        delay(1, eventHover)
      },
    },
    {
      namespace: 'events',
      afterEnter() {
        delay(1, eventsFilter)
        delay(1, eventHover)
      },
    },
  ],
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
