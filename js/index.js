let header = document.querySelector('#header')
let aside = document.querySelector('#aside-menu')
let button = document.querySelector('#menu-button')
let body = document.querySelector('body')
let menuOpen = false
button.onclick = () => {
  menuOpen = !menuOpen
  aside.classList.toggle('menu-open')
  header.classList.toggle('menu-open')
  body.classList.toggle('menu-open')
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

// window.scrollTo({
//     top: 100,
//     left: 100,
//     behavior: 'smooth'
//   });