function JugadorMapamundi(posicionInicialEnPixeles) {
	this.ancho = 48;
	this.alto = 48;

	this.velocidadMovimiento = 1;

	let centroX = dimensiones.ancho / 2 - this.ancho / 2;
	let centroY = dimensiones.alto / 2 - this.alto / 2;

	this.posicionEnMapaEnPixeles = posicionInicialEnPixeles;
}

JugadorMapamundi.prototype.aplicarEstilos = function() {
	
};