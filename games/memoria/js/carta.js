const carta = {
	crearCartas: () => {
		const cantidadCartas = cartas.todasCartas.length;
		const ancho = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		const alto = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
		const anchoActual = ancho - 10 - (cantidadCartas*20);
		const altoActual = alto - 100;
		const areaTablero = anchoActual*altoActual;
		const areaCarta = areaTablero/cantidadCartas;
		const altoAncho = Math.sqrt(areaCarta);
		const fontSize = altoAncho - 20;

		let tablero = document.getElementById('tablero');
		tablero.style.gridTemplateColumns = `repeat(auto-fit, ${altoAncho}px)`;
		tablero.style.gridTemplateRows = `repeat(auto-fit, ${altoAncho}px)`;
		tablero.innerHTML = '';

		cartas.todasCartas.map(carta => {
			tablero.insertAdjacentHTML('beforeend', 
				`<div class="carta" style="height:${altoAncho}px; width:${altoAncho}px; font-size:${fontSize}px;">
				  <i class="fa ${carta}" style="height:${altoAncho}px; width:${altoAncho}px;"></i>
				  <span class="back" style="height:${altoAncho}px; width:${altoAncho}px;"></span>
				</div>`);
		})
	}
}