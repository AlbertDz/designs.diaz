const carta = {
	crearCartas: () => {
		let tablero = document.getElementById('tablero');

		cartas.todasCartas.map(carta => {
			tablero.insertAdjacentHTML('beforeend', 
				`<div class="carta">
				  <i class="fa ${carta}"></i>
				  <span class="back"></span>
				</div>`);
		})
	}
}