const inicio = {
	iniciarJuego: () => {
		cartas.contenidoCartas();
		inicio.voltearCarta();
	},
	primeraCarta: '',
	segundaCarta: '',
	contador: 0,
	actual: '',
	parejas: cant => {
		cartas.cantParejas = cant;
	},
	voltearCarta: () => {
		const cartas = document.getElementsByClassName('carta');
		const fondoPopUp = document.getElementById('pop-up-fondo');
		const closePopUp = document.getElementById('pop-up-close');

		for (i = 0; i < cartas.length; i++) {
			cartas[i].addEventListener('click', e => {
				const target = e.path[1];

				if (target.classList[1] === undefined && inicio.segundaCarta === '') {
					target.classList.add('activa');
					const valor = target;

					if (inicio.primeraCarta === '') {
						inicio.primeraCarta = valor
					} else {
						inicio.segundaCarta = valor;

						if (inicio.primeraCarta.innerHTML === inicio.segundaCarta.innerHTML) {
							inicio.primeraCarta = '';
							inicio.segundaCarta = '';
							inicio.contador++;

							if (inicio.contador === (cartas.length/2)) {
								fondoPopUp.style.zIndex = 1000;

								setTimeout(() => {
									fondoPopUp.style.opacity = 1;
									inicio.contador = 0;
								}, 500);
							}
						} else {
							setTimeout(() => {
								inicio.primeraCarta.classList.remove('activa');
								inicio.segundaCarta.classList.remove('activa');
								inicio.primeraCarta = '';
								inicio.segundaCarta = '';
							}, 500)
						}
					}
				}
			})
		}

		closePopUp.addEventListener('click', e => {
			fondoPopUp.style.opacity = 0;
			fondoPopUp.style.zIndex = -1;
		})
	}
}

window.addEventListener('load', e => {
	inicio.iniciarJuego();
	inicio.actual = document.querySelector('.click');

	const imgTablero = document.getElementById('background-tablero'); 
	const tableros = document.getElementsByClassName('img-tablero');
	const control = document.getElementById('control')
	const cambiarParejas = document.getElementById('cambiar-parejas');
	const enviar = document.getElementById('enviar');

	for (i = 0; i < tableros.length; i++) {
		tableros[i].addEventListener('click', e => {
			imgTablero.src = e.target.src;
		})
	}

	control.addEventListener('click', e => {
		e.target.classList.add('click');

		setTimeout(() => e.target.classList.remove('click'), 500)

		inicio.iniciarJuego();
	})

	cambiarParejas.addEventListener('submit', e => {
		e.preventDefault();

		inicio.parejas(e.target[0].value);
		inicio.iniciarJuego();
	})

	enviar.addEventListener('click', e => {
		e.target.classList.add('click');

		setTimeout(() => e.target.classList.remove('click'), 500)
	})
})