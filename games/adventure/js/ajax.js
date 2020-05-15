let ajax = {
	cargarArchivo: ruta => {
		let peticion = new XMLHttpRequest();

		peticion.onreadystatechange = () => {
			if (peticion.readyState === XMLHttpRequest.DONE) {
				if (peticion.status === 200) {
					console.log(JSON.parse(peticion.responseText))
				} else if (peticion.status === 400) {
					console.log('Error');
				} else {
					console.log('Resultado Inesperado');
				}
			}
		}

		peticion.open('GET', ruta, true);
		peticion.send();
	}
};