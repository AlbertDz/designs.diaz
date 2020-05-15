let mando = {
	objeto: null,
	eventosDisponibles: 'ongamepadconnected' in window,
	conectado: false,
	iniciar: () => {
		if (mando.eventosDisponibles) {
			window.addEventListener('gamepadconnected', mando.conectar);
			window.addEventListener('gamepaddisconnected', mando.desconectar);
		} else {
			mando.actualizar();
		}
	},
	conectar: e => {
		mando.objeto = e.gamepad;
		mando.identificar();
	},
	desconectar: e => {
		console.log('Mando desconectado del indice %d: %s.', e.gamepad.index, e.gamepad.id);
	},
	actualizar: () => {
		if (!mando.eventosDisponibles) {
			mandos = null;

			try {
				mandos = navigator.getGamepads ?navigator.getGamepads() :(navigator.webkitGetGamepads ?navigator.webkitGetGamepads :[]);
				mando.objeto = mandos[0];

				if (!mando.conectado) {
					mando.conectado = true;
					mando.identificar();
				}
			} catch (error) {
				console.log(error.message);
			}
		}

		if (!mando.objeto) {
			return;
		}

		if (mando.botonPulsado(mando.objeto.buttons[0])) {
			console.log('Boton Pulsado');
		}
	},
	botonPulsado: boton => {
		if (typeof(boton) === 'object') {
			return boton.pressed;
		}

		return boton == 1.0;
	},
	identificar: () => {
		console.log(`Mando conectado en el indice: ${mando.objeto.index}: ${mando.objeto.id}. 
					${mando.objeto.buttons.length} botones, ${mando.objeto.axes.length} ejes.`);
	}
};