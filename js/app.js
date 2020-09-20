function init() {
  const hamburgerMenu = document.querySelector('.menu__hamburger')
  const navbar = document.querySelector('.nav__list')

  hamburgerMenu.addEventListener('click', (e) => {
    const target = e.target.closest('.menu__hamburger')
    target.classList.toggle('open')
    navbar.classList.toggle('open')
  })
}
init()
