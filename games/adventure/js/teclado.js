let teclado = {
	teclas: new Array(),
	iniciar: () => {
		document.onkeydown = teclado.guardarTecla;
		document.onkeyup = teclado.borrarTecla;
	},
	guardarTecla: e => {
		if (teclado.teclas.indexOf(e.key) === -1) {
			teclado.teclas.push(e.key);
		}
	},
	borrarTecla: e => {
		let posicion = teclado.teclas.indexOf(e.key);
		if (posicion !== -1) {
			teclado.teclas.splice(posicion, 1);
		}
	},
	teclaPulsada: codigoTecla => {
		return (teclado.teclas.indexOf(codigoTecla) !== -1) ?true :false;
	}
};