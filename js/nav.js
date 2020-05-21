let actionNav = document.getElementById('action-nav');
let nav = document.querySelector('nav');

actionNav.addEventListener('click', e => {
	nav.classList.toggle('show');
});

window.addEventListener('scroll', e => {
	if (window.scrollY <= 50) {
		actionNav.style.opacity = 0;
		nav.classList.add('show');
	} else {
		actionNav.style.opacity = 1;
		nav.classList.remove('show');
	}
})