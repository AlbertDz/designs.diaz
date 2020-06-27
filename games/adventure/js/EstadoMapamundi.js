function EstadoMapamundi(idEstado) {
	let that = this;

	this.mapaListo = false;
	this.mapa = null;
	ajax.cargarArchivo('mapas/desierto.json', objetoJSON => {
		that.mapa = new Mapa(objetoJSON);
		that.mapaListo = true;
	});
}

EstadoMapamundi.prototype.actualizar = function() {
	if (!this.mapa) {
		return;
	}

	this.mapa.actualizar();
};

EstadoMapamundi.prototype.dibujar = function() {
	if (!this.mapa) {
		return;
	}

	this.mapa.dibujar();	
};