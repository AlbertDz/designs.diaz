let inicio = {
	iniciadores: [
		maquinaEstados.iniciar(),
		teclado.iniciar(),
		mando.iniciar(),
		buclePrincipal.iterar()
	],
	iniciarJuego: () => {
		inicio.encadenarInicios(inicio.iniciadores.shift());
	},
	encadenarInicios: iniciador => {
		if (iniciador) {
			iniciador(() => inicio.encadenarInicios(iniciadores.shift()))
		}
	}
};

document.addEventListener('DOMContentLoaded', () => {
	inicio.iniciarJuego();
}, false);
