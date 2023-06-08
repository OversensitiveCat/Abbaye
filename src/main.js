import barba from '@barba/core'
import barbaPrefetch from '@barba/prefetch'
import { gsap } from 'gsap'

import homeOnce from './assets/transitions/once'
import { leave, enter } from './assets/transitions/transitions'
import {
  arrowUpHover,
  arrowDownHover,
  arrowRoundHover,
  eventHover,
} from './assets/views/animations'
import eventsFilter from './assets/views/events'
import filterMob from './assets/views/filter-mob'
import galerie from './assets/views/galerie'
import { setLenis } from './assets/views/lenis'
import drop from './assets/views/mentions'
import navMobile from './assets/views/navMobile'

function delay(t, f) {
  gsap.delayedCall(t, f)
}

setLenis()

barba.use(barbaPrefetch)

barba.hooks.beforeEnter(() => {
  window.addEventListener('unload', () => window.scrollTo(0, 0))
})

barba.hooks.afterEnter((data) => {
  setLenis()
  navMobile(data)
})

barba.init({
  timeout: 4000,
  views: [
    {
      namespace: 'home',
      afterEnter() {
        delay(0.5, () => {
          eventHover(), arrowDownHover(), arrowRoundHover(), arrowUpHover()
        })
      },
    },
    {
      namespace: 'about',
      afterEnter() {
        delay(0.5, () => {
          arrowUpHover()
        })
      },
    },
    {
      namespace: 'contact',
      afterEnter() {
        delay(0.5, () => {
          arrowUpHover()
        })
      },
    },
    {
      namespace: 'events',
      afterEnter() {
        delay(1, () => {
          eventsFilter(), eventHover(), filterMob()
        })
      },
    },
    {
      namespace: 'galerie',
      afterEnter() {
        delay(1, galerie)
      },
    },
    {
      namespace: 'mentions',
      afterEnter() {
        delay(1, drop)
      },
    },
    {
      namespace: 'event',
      afterEnter() {
        delay(0.5, () => {
          arrowUpHover()
        })
      },
    },
  ],
  transitions: [
    {
      name: 'default',
      afterLeave(data) {
        const done = this.async()
        leave(data, done)
      },
      enter(data) {
        enter(data)
      },
    },
    {
      name: 'home',
      to: { namespace: ['home'] },
      afterLeave(data) {
        const done = this.async()
        leave(data, done)
      },
      enter(data) {
        enter(data)
      },
      once() {
        homeOnce()
      },
    },
  ],
})
