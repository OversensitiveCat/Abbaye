import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const galerie = () => {
  // Set up
  const albums = gsap.utils.toArray('.album')
  const fields = gsap.utils.toArray('.album-field')
  const boxs = gsap.utils.toArray('.checkbox-albums .button')
  let galerie = []

  function createAlbum(album, i) {
    const getImgs = () => {
      return Array.from(album.querySelectorAll('img'))
    }
    return {
      album: album,
      imgs: getImgs(),
      field: fields[i],
      box: boxs[i],
      current: false,
      previous: false,
    }
  }

  albums.forEach((album) => {
    let i = albums.indexOf(album)
    let obj = createAlbum(album, i)
    galerie.push(obj)
  })

  // Anim
  function remove(imgs) {
    imgs.forEach((img) => {
      img.remove()
    })
  }
  function add(imgs, gal) {
    imgs.forEach((img) => {
      gal.appendChild(img)
    })
  }

  function anim(p, n) {
    add(n.imgs, n.album)
    let tl = gsap.timeline({
      onComplete: () => {
        remove(p.imgs)
      },
    })
    tl.fromTo(
      p.imgs,
      { autoAlpha: 1, yPercent: 0 },
      { autoAlpha: 0, yPercent: 30 }
    ).fromTo(
      n.imgs,
      { autoAlpha: 0, yPercent: 30 },
      { autoAlpha: 1, yPercent: 0 }
    )
  }

  // Legend

  const legendContainer = document.querySelector('.legend-container')
  let expo = legendContainer.querySelector('.expo'),
    artist = legendContainer.querySelector('.artist'),
    year = legendContainer.querySelector('.year')

  ScrollTrigger.create({
    trigger: '.divide-section.galerie',
    start: 'top top',
    end: 'bottom bottom',
    pin: legendContainer,
  })

  const legends = [
    { expo: 'Espace Poétique', artist: 'Maryline Pomian', year: 2005 },
    { expo: 'Sourire de Sculpteur', artist: '–', year: 2006 },
    { expo: 'Métissages', artist: 'Khadidja Seddiki', year: 2008 },
    { expo: 'Sculptures célestes', artist: 'Angela Glajkar', year: 2008 },
    { expo: 'Chaos et cosmos', artist: 'Martine Lutz', year: 2010 },
    { expo: "Nuage d'essaim", artist: 'Leone Hendricksen', year: 2010 },
    { expo: 'Corps et graphie', artist: 'Betty Hanns', year: 2011 },
    { expo: 'Corps et graphie', artist: 'Marie Leclere', year: 2011 },
    { expo: 'Déchirures', artist: 'Jacqueline Bilheran-Gaillard', year: 2011 },
    {
      expo: 'Templum',
      artist: 'Brigitte Ritschard & Tineke Bruijnzeeks',
      year: 2012,
    },
    { expo: 'Faire-faire', artist: '–', year: 2013 },
    { expo: 'Temps aboli', artist: 'Coralie Laverdet', year: 2013 },
    { expo: 'Villes envolées', artist: 'Marie Goussé', year: 2013 },
    { expo: 'Déjà loin', artist: 'Maren Ruben', year: 2014 },
    {
      expo: 'Contre-poids',
      artist: 'Monika Schmidt & Dietrich Schön',
      year: 2015,
    },
    { expo: 'Hortus', artist: 'Hannelore Weutbrecht', year: 2016 },
  ]

  function changeText(i) {
    expo.innerText = legends[i].expo
    artist.innerText = legends[i].artist
    year.innerText = legends[i].year
  }

  function legendAnim(i) {
    let tl = gsap.timeline()
    tl.fromTo(
      legendContainer,
      { autoAlpha: 1 },
      {
        autoAlpha: 0,
        duration: 0.1,
        ease: 'none',
        onComplete: () => changeText(i),
      }
    ).fromTo(
      legendContainer,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 0.1,
        ease: 'none',
      }
    )
  }

  galerie[0].imgs.forEach((img) => {
    let i = galerie[0].imgs.indexOf(img)
    img.addEventListener('mouseenter', () => legendAnim(i))
  })

  // Beginning

  function beginning(galerie) {
    galerie.forEach((g) => {
      if (!galerie.indexOf(g) == 0) {
        remove(g.imgs)
        gsap.set(g.album, { opacity: 1 })
      } else {
        g.current = true
      }
    })
  }

  beginning(galerie)

  // Find previous
  function find(c) {
    return c.current == true
  }

  // Events
  function toogle(f) {
    let previous = galerie.find(find)
    let next = galerie[fields.indexOf(f)]
    if (!next.current) {
      previous.current = false
      previous.previous = true
      next.current = true
      previous.box.classList.remove('current')
      next.box.classList.add('current')
      anim(previous, next)

      if (previous == galerie[1]) {
        changeText(0)
        gsap.fromTo(legendContainer, { autoAlpha: 0 }, { autoAlpha: 1 })
      } else {
        gsap.fromTo(legendContainer, { autoAlpha: 1 }, { autoAlpha: 0 })
      }
    } else return
  }

  fields.forEach((field) =>
    field.addEventListener('click', () => toogle(field))
  )
}

export default galerie
