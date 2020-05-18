let actionNav = document.getElementById('action-nav');
let nav = document.querySelector('nav');

actionNav.addEventListener('click', e => {
	nav.classList.toggle('show');
});
