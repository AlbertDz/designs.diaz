document.addEventListener('click', e => {
	let body = document.querySelector('body');
	let bullet = document.createElement('i');
	let x = e.offsetX;
	let y = e.offsetY;
	let audio = document.getElementById('audio');

	bullet.style.left = `${x}px`;
	bullet.style.top = `${y}px`;
	body.appendChild(bullet);
	audio.volume = 0.05;
	audio.play();
})