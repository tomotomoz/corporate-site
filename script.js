'use strict'

// const fade = document.querySelectorAll('.fade')
// // const fade = [...document.querySelectorAll('.fade')];
// console.log(fade)

// const setItemActive = (entries) => {
//   entries.forEach((entry) => {
//   console.log(entry)
//   if(entry.isIntersecting){
//     entry.target.classList.add('active')
//     observerElement.unobserve(entry.target)
//   }
//   })
// }
// const options = {
// rootMargin: '0px',
// threshold: 0.5,
//   }

// const observerElement = new IntersectionObserver(setItemActive, options)
// fade.forEach((fad) => {
//   observerElement.observe(fad)
// }
// )
document.addEventListener('DOMContentLoaded', () => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

const fade = document.querySelectorAll('.fade');
fade.forEach(fad => {
  const observer = new IntersectionObserver((entries, observer) => {
    
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('active')
        observer.unobserve(entry.target)
      }
    })
  })
  observer.observe(fad);
});
});
