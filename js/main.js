//показать меню
const navMenu = document.getElementById('nav-menu'),
	navToggle = document.getElementById('nav-toggle'),
	navClose = document.getElementById('nav-close')

if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-menu')
	})
}
// или спрятать меню
if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu')
	})
}

//убираю мобильное меню и ставлю бургер
const navLink = document.querySelectorAll('.nav__link')
function linkAction() {
	const navMenu = document.getElementById('nav-menu')
	navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//верхняя прокрутка
function scrollHeader() {
	const header = document.getElementById('header')
// Когда прокрутка больше, чем 50, добавляю класс scroll-header к тегу заголовка
	if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

//показ верхней прокрутки
function scrollUp() {
	const scrollUp = document.getElementById('scroll-up');
	// Когда прокрутка больше, чем 300, добавляю класс show-scroll к тегу заголовка scroll-top class
	if (this.scrollY >= 300) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

//ссылки на активные прокрутки
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
	const scrollY = window.pageYOffset

	sections.forEach(current => {
		const sectionHeight = current.offsetHeight
		const sectionTop = current.offsetTop - 50;
		sectionId = current.getAttribute('id')

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
		} else {
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
		}
	})
}
window.addEventListener('scroll', scrollActive)


//анимация появления
const sr = ScrollReveal({
	distance: '60px',
	duration: 2500,
	delay: 400,
	// reset: true
})

sr.reveal(`.home__header, .section__title`, { delay: 600 })
sr.reveal(`.home__footer`, { delay: 700 })
sr.reveal(`.home__img`, { delay: 900, origin: 'top' })

sr.reveal(`.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy`, { origin: 'top', interval: 100 })
sr.reveal(`.specs__data, .discount__animate`, { origin: 'left', interval: 100 })
sr.reveal(`.specs__img, .discount__img`, { origin: 'right' })
sr.reveal(`.case__img`, { origin: 'top' })
sr.reveal(`.case__data`, { origin: 'bottom' })





