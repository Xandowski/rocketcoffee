const themeSwitchBtn = document.querySelector('[data-js="theme-switch-btn"]')
const moon = document.querySelector('[data-js="moon"]')
const sun = document.querySelector('[data-js="sun"]')
const body = document.querySelector('body')
// const copyright = document.querySelector('[data-js="copyright"]')
// const footer = document.querySelector('footer')
const logoDark = document.querySelector('[data-js="logo-dark"]')
const logo = document.querySelector('[data-js="logo"]')

const switchTheme = () => {
  body.classList.toggle('dark_mode')
  moon.classList.toggle('_moon')
  sun.classList.toggle('_sun')
  logo.classList.toggle('_logo')
  logoDark.classList.toggle('_logo-dark')
}

themeSwitchBtn.addEventListener('click', switchTheme, false)