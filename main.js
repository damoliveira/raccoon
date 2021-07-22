const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const elements of toggle) {
  elements.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/*===CLOSE MENU ICON===*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

/*==SCROLLREVEAL==*/
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
#header container, #header logo, #header toogle,#header button,   
 #home image,#home .text,#home image, #home p, #home h3,
#services container,#services h3,#services p, #services .cards,#services flash-card,
#about .container,#about .text-title,#about .card-about1, #about .card-about2,#about .card-about3,#about .text,
#testimonials .container, #testimonials .banner,
#contact .container, #contact .area,
footer .footer
`,
  { interval: 100 }
)
/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})























window.addEventListener('scroll', function () {
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection()
  })
  