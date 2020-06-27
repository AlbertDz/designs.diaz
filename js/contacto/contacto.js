const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const correo = document.getElementById('correo');
const telefono = document.getElementById('telefono');
const mensaje = document.getElementById('mensaje');
const enviar = document.getElementById('enviar');

const nombreApellidoValido = e => {
	if (e.target.value !== '') {
		let data = e.target.value;
		let exp = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

		if (!exp.test(data) || data.length<3 || data.length>20) {
			e.target.focus();
		}
	}
}

const correoValido = e => {
	if (e.target.value !== '') {
		let data = e.target.value;
		let exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		
		if (!exp.test(data) || data.length>50) {
			e.target.focus();
		}
	}
}

const revisar = e =>{
	if(e.target.value === ''){
		e.target.focus();
	}
}

const mensajeValido = e => {
	if(e.target.value !== '') {
		let data = e.target.value;
		let exp = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

		if (data.length<10) {
			e.target.focus();
		}
	}
}

const enviarCorreo = e => {
	e.preventDefault();

	console.log(e.target)
	console.log(this.nombre)
	console.log(this.apellido)
	console.log(this.correo)
	console.log(this.telefono)
	console.log(this.mensaje)
}

const validados = () => {
	
}

const loadDocument = () => {
	if (validados()) {
		enviar.enabled();
		enviar.addEventListener('submit', enviarCorreo);
	}

	nombre.addEventListener("blur", revisar);
	nombre.addEventListener("blur", nombreApellidoValido);
	nombre.addEventListener("keyup", revisar);
	nombre.addEventListener("keyup", nombreApellidoValido);

	apellido.addEventListener("blur", revisar);
	apellido.addEventListener("blur", nombreApellidoValido);
	apellido.addEventListener("keyup", revisar);
	apellido.addEventListener("keyup", nombreApellidoValido);

	correo.addEventListener("blur", revisar);
	correo.addEventListener("blur", correoValido);
	correo.addEventListener("keyup", revisar);
	correo.addEventListener("keyup", correoValido);

	mensaje.addEventListener("blur", revisar);
	mensaje.addEventListener("blur", mensajeValido);
	mensaje.addEventListener("keyup", revisar);
	mensaje.addEventListener("keyup", mensajeValido);
}

window.addEventListener("load", loadDocument);