const cartas = {
	todasCartas: new Array(),
	contenidoCartas: () => {
		for (c = 0; c < 15; c++) {
			const cant = icon.icons.length - 1;
			const valor = Math.ceil(Math.random() * cant);

			cartas.todasCartas.push(icon.icons[valor]);
			cartas.todasCartas.push(icon.icons[valor]);
		}

		cartas.todasCartas = cartas.todasCartas.sort(() =>  Math.random() - 0.5);
		carta.crearCartas();
	}
}