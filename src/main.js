import barba from '@barba/core'
import barbaPrefetch from '@barba/prefetch'
import imagesLoaded from 'imagesloaded'

import homeOnce from './assets/transitions/once'
import { leave, enter } from './assets/transitions/transitions'
import about from './assets/views/about'
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
  preventRunning: true,
  timeout: 4000,
  views: [
    {
      namespace: 'home',
      afterEnter() {
        eventHover(), arrowDownHover(), arrowRoundHover(), arrowUpHover()
      },
    },
    {
      namespace: 'about',
      afterEnter() {
        arrowUpHover(), about()
      },
    },
    {
      namespace: 'contact',
      afterEnter() {
        arrowUpHover()
      },
    },
    {
      namespace: 'events',
      afterEnter() {
        eventsFilter(), eventHover(), filterMob()
      },
    },
    {
      namespace: 'galerie',
      afterEnter(data) {
        imagesLoaded(data.next.container, function () {
          galerie()
        })
      },
    },
    {
      namespace: 'mentions',
      afterEnter() {
        drop()
      },
    },
    {
      namespace: 'event',
      afterEnter() {
        arrowUpHover()
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
