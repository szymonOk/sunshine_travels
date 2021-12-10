const nav = document.querySelector('.nav__container')
const eachNavItem = document.querySelectorAll('.nav__item')
const btn = document.querySelector('.nav__btn')

const handleNav = () => {
	nav.classList.toggle('nav__container--active')

	eachNavItem.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav__container--active')
		})
	})

	handleNavItemsAnimation()
}

const handleNavItemsAnimation = () => {
	let delayTime = 0

	eachNavItem.forEach(item => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

btn.addEventListener('click', handleNav)
