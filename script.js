'use strict'

gsap.registerPlugin(ScrollTrigger)

const elements = gsap.utils.toArray('.fade')
console.log(elements)

elements.forEach((el) => {
  gsap.fromTo(el, {
  opacity: 0,
  y: 5,
  },
{opacity: 1,
  y: 0,
  duration: 0.5,

  scrollTrigger: {
    trigger: el,
    start: 'top 70%',
  // markers: true
  },
});
});
