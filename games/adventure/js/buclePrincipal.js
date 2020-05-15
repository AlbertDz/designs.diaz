let buclePrincipal = {
	idEjecucion: null,
	ultimoRegistro: 0,
	aps: 0,
	fps: 0,
	iterar: registroTemporal => {
		buclePrincipal.idEjecucion = window.requestAnimationFrame(buclePrincipal.iterar);

		buclePrincipal.actualizar(registroTemporal);
		buclePrincipal.dibujar(registroTemporal);

		if (registroTemporal - buclePrincipal.ultimoRegistro > 999) {
			buclePrincipal.ultimoRegistro = registroTemporal;
			// console.log('Aps: '+buclePrincipal.aps+' | Fps: '+buclePrincipal.fps);
			buclePrincipal.aps = 0;
			buclePrincipal.fps = 0;
		}
	},
	detener: () => {

	},
	actualizar: registroTemporal => {
		teclado.reiniciar();
		mando.actualizar();
		buclePrincipal.aps++;
	},
	dibujar: registroTemporal => {
		buclePrincipal.fps++;
	}
};