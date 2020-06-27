const card = document.getElementsByClassName('card');
let active = document.getElementsByClassName('activeCard');

window.addEventListener('load', e => {
	for (i = 0; i < card.length; i++) {
		card[i].addEventListener('click', e => {
			if (e.path[2] !== active[0]) {
				if (active.length !== 0)
					active[0].classList.remove('activeCard');

				e.path[2].classList.add('activeCard');

				active = document.getElementsByClassName('activeCard');
			} else {
				e.path[2].classList.remove('activeCard');
			}
		})
	}
})