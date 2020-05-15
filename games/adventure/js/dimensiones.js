let dimensiones = {
	ancho: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
	alto: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
	ladoTiles: 100,
	escale: 1,
	iniciar: () => {
		window.addEventListener('resize', e => {
			dimensiones.ancho = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
			dimensiones.alto = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
			inicio.recargarTiles();
		});
	},
	obtenerTilesHorizontales: () => {
		let ladoFinal = dimensiones.ladoTiles * dimensiones.escale;
		return Math.ceil((dimensiones.ancho - ladoFinal) / ladoFinal)
	},
	obtenerTilesVerticales: () => {
		let ladoFinal = dimensiones.ladoTiles * dimensiones.escale;
		return Math.ceil((dimensiones.alto - ladoFinal) / ladoFinal)
	},
	obtenerTotalTiles: () => {
		return dimensiones.obtenerTilesHorizontales() * dimensiones.obtenerTilesVerticales();
	}
};