const nav = document.querySelector('.nav__container')
const eachNavItem = document.querySelectorAll('.nav__item')
const btn = document.querySelector('.nav__btn')
const footerYear = document.querySelector('.footer__year')
const navBars = document.querySelector('.nav__bars')
const allSections = document.querySelectorAll('.section')

// BLACK NAVIGATION
const handleObserver = () => {
	const currentSection = window.scrollY

	allSections.forEach(section => {
		if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
			navBars.classList.add('black-bars')
		} else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
			navBars.classList.remove('black-bars')
		}
	})
}

// NAVIGATION SLIDE
const handleNav = () => {
	nav.classList.toggle('nav__container--active')
	navBars.classList.remove('black-bars')

	eachNavItem.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav__container--active')
		})
	})

	handleNavItemsAnimation()
}

// NAVIGATION ANIMATION
const handleNavItemsAnimation = () => {
	let delayTime = 0

	eachNavItem.forEach(item => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

// YEAR
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()
btn.addEventListener('click', handleNav)
window.addEventListener('scroll', handleObserver)
