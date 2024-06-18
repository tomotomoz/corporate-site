'use strict'

const fade = document.querySelectorAll('.fade')
// const fade = [...document.querySelectorAll('.fade')];
console.log(fade)

const setItemActive = (entries) => {
  entries.forEach((entry) => {
  console.log(entry)
  if(entry.isIntersecting){
    entry.target.classList.add('active')
  }else{
    entry.target.classList.remove('active')
  }
  })
}
const options = {
rootMargin: '0px',
threshold: 0.5,
  }

const observerElement = new IntersectionObserver(setItemActive, options)
fade.forEach((fad) => {
  observerElement.observe(fad)
}
)

