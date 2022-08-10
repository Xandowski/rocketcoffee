const themeSwitchBtn = document.querySelector('[data-js="theme-switch-btn"]')
const moon = document.querySelector('[data-js="moon"]')
const copyright = document.querySelector('[data-js="copyright"]')
const sun = document.querySelector('[data-js="sun"]')
const body = document.querySelector('body')
const paragraphs = document.querySelectorAll('p')
const detailsTitle = document.querySelectorAll('h3')
const price = document.querySelectorAll('strong')
const title = document.querySelector('h1')
const footer = document.querySelector('footer')
const logoDark = document.querySelector('[data-js="logo-dark"]')
const logo = document.querySelector('[data-js="logo"]')

const switchTheme = () => {
  if (!moon.classList.contains('_moon')) {
    moon.classList.add('_moon')
    sun.classList.add('_sun')
    body.classList.add('_body')
    paragraphs.forEach(p => {
      p.classList.add('_text')
      p.classList.add('_text_opacity')
    })
    detailsTitle.forEach(h3 => {
      h3.classList.add('_text')
    })
    price.forEach(strong => {
      strong.classList.add('_text')
    })
    title.classList.add('_text')
    copyright.classList.add('_text')
    footer.classList.add('_footer-border')
    logoDark.classList.add('_logo-dark')
    logo.classList.add('_logo')
  } else {
    moon.classList.remove('_moon')
    sun.classList.remove('_sun')
    body.classList.remove('_body')
    paragraphs.forEach(p => {
      p.classList.remove('_text')
      p.classList.remove('_text_opacity')
    })
    detailsTitle.forEach(h3 => {
      h3.classList.remove('_text')
    })
    price.forEach(strong => {
      strong.classList.remove('_text')
    })
    title.classList.remove('_text')
    copyright.classList.remove('_text')
    footer.classList.remove('_footer-border')
    logoDark.classList.remove('_logo-dark')
    logo.classList.remove('_logo')
  }
}

themeSwitchBtn.addEventListener('click', switchTheme, false)