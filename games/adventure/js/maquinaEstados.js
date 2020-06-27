const maquinaEstados = {
	estadoActual: null,
	iniciar: () => {
		maquinaEstados.cambiarEstado(listadoEstados.MAPAMUNDI);
	},
	cambiarEstado: nuevoEstado => {
		switch (nuevoEstado) {
			case listadoEstados.CARGANDO:
				break;
			case listadoEstados.MENU_INICIAL:
				break;
			case listadoEstados.MAPAMUNDI:
				maquinaEstados.estadoActual = new EstadoMapamundi(listadoEstados.MAPAMUNDI);
				break;
			case listadoEstados.NIVEL:
				break;
		}
	},
	actualizar: () => {
		maquinaEstados.estadoActual.actualizar();
	},
	dibujar: () => {
		maquinaEstados.estadoActual.dibujar()
	}
}