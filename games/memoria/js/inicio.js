const inicio = {
	iniciarJuego: () => {
		cartas.contenidoCartas();
	},
	primeraCarta: '',
	segundaCarta: '',
	contador: 0
}

window.addEventListener('load', e => {
	inicio.iniciarJuego();

	const cartas = document.getElementsByClassName('carta');

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

						if (inicio.contador === 15) {
							setTimeout(() => {
								alert('Felicidades has ganado');
							}, 1500);
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
})