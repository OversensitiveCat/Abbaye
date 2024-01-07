import { gsap } from 'gsap'

const eventsFilter = () => {
  // Gets events and creates an object
  const collection = document.querySelector('#archives')
  const events = gsap.utils.toArray('#archives > .event')
  let obj = [
    { year: 2023, items: [], checked: false },
    { year: 2022, items: [], checked: false },
    { year: 2021, items: [], checked: false },
    { year: 2020, items: [], checked: false },
    { year: 2019, items: [], checked: false },
    { year: 2018, items: [], checked: false },
    { year: 2017, items: [], checked: false },
    { year: 2016, items: [], checked: false },
    { year: 2015, items: [], checked: false },
    { year: 2014, items: [], checked: false },
    { year: 2013, items: [], checked: false },
    { year: 2012, items: [], checked: false },
    { year: 2011, items: [], checked: false },
  ]

  events.forEach((event) => {
    let y = event.querySelector('.saison-year').innerHTML
    for (let i = 0; i < obj.length; i++) {
      if (obj[i].year == y) {
        obj[i].items.push(event)
      }
    }
  })

  // Creates functions / animations

  let current = events
  let empty = false

  function leave() {
    gsap.to(current, {
      autoAlpha: 0,
      yPercent: 30,
      duration: 0.75,
      ease: 'power1.inOut',
      onComplete: enter,
    })
  }

  function enter() {
    current.forEach((e) => e.remove())

    current = []
    if (!empty) {
      for (let i = 0; i < obj.length; i++) {
        if (obj[i].checked === true) current = current.concat(obj[i].items)
      }
    } else {
      current = events
    }
    current.forEach((e) => collection.appendChild(e))
    gsap.fromTo(
      current,
      { autoAlpha: 0, yPercent: 30 },
      {
        autoAlpha: 1,
        yPercent: 0,
        duration: 0.75,
        ease: 'power1.inOut',
        onComplete: () => {
          empty = false
        },
      }
    )
  }

  //  Main function – Verifies the checkboxs and update the object

  function filter(field) {
    let box = field.querySelector('.w-checkbox-input')
    let y = box.nextSibling.id

    if (!box.classList.contains('w--redirected-checked')) {
      for (let i = 0; i < obj.length; i++) {
        if (obj[i].year == y) {
          obj[i].checked = true
        }
      }
    } else {
      for (let i = 0; i < obj.length; i++) {
        if (obj[i].year == y) {
          obj[i].checked = false
        }
      }
    }
    function noFilter(e) {
      return e.checked == false
    }
    if (obj.every(noFilter)) {
      empty = true
    }

    // Launchs the animation
    leave()
  }

  // Add checkbox event
  const fields = gsap.utils.toArray('.year-field')
  fields.forEach((field) => {
    field.addEventListener('click', () => filter(field))
  })

  // Reset button
  let resetButton = document.querySelector('.reset')

  function reset() {
    const boxs = gsap.utils.toArray('.w-checkbox-input')

    // Removes webflow class
    boxs.forEach((box) => {
      if (box.classList.contains('w--redirected-checked')) {
        box.classList.remove('w--redirected-checked')
      }
    })
    // Updates object
    obj.forEach((y) => {
      y.checked = false
    })
    // Launchs animation
    empty = true
    leave()
  }

  resetButton.addEventListener('click', () => reset())
}

export default eventsFilter
