export function initBurger() {
	const btnBurgerEl = document.getElementById('header-btn-burger');
	const headerNavEl = document.getElementById('header-nav');
	const linksInNav = headerNavEl.querySelectorAll('a');

	function closeNav() {
		btnBurgerEl.classList.remove('active');
		headerNavEl.classList.remove('active');
	}

	function toggleNav(e) {
		btnBurgerEl.classList.toggle('active');
		headerNavEl.classList.toggle('active');
	}

	btnBurgerEl.addEventListener('click', toggleNav);
	Array.from(linksInNav).forEach((link) =>
		link.addEventListener('click', closeNav)
	);
}
