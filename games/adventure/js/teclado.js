let teclado = {
	teclas: new Array(),
	iniciar: () => {
		document.onkeydown = teclado.guardarTecla;
	},
	guardarTecla: e => {
		teclado.teclas.push(e.key);
		console.log(e.key);
	},
	teclaPulsada: codigoTecla => {
		return (teclado.teclas.indexOf(codigoTecla) !== -1) ?true :false;
	},
	reiniciar: () => {
		teclado.teclas = new Array();
	}
};