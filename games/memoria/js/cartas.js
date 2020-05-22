const cartas = {
	todasCartas: new Array(),
	cantParejas: 15,
	contenidoCartas: () => {
		cartas.todasCartas = new Array();

		for (c = 0; c < cartas.cantParejas; c++) {
			const cant = icon.icons.length - 1;
			const valor = Math.ceil(Math.random() * cant);

			cartas.todasCartas.push(icon.icons[valor]);
			cartas.todasCartas.push(icon.icons[valor]);
		}

		cartas.todasCartas = cartas.todasCartas.sort(() =>  Math.random() - 0.5);
		carta.crearCartas();
	}
}