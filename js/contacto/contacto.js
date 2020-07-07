const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const correo = document.getElementById('correo');
const telefono = document.getElementById('telefono');
const mensaje = document.getElementById('mensaje');
const enviar = document.getElementById('enviar');
const popUp = document.getElementById('pop-up');

const nombreApellidoValido = e => {
	if (e.target.value !== '') {
		let data = e.target.value;
		let exp = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

		if (!exp.test(data) || data.length<3 || data.length>20)
			e.target.style.borderColor = 'red';
		else
			e.target.style.borderColor = '#777';
	}
}

const correoValido = e => {
	if (e.target.value !== '') {
		let data = e.target.value;
		let exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		
		if (!exp.test(data) || data.length>50)
			e.target.style.borderColor = 'red';
		else
			e.target.style.borderColor = '#777'
	}
}

const revisar = e => {
	if(e.target.value === '')
		e.target.style.borderColor = 'red';
	else
		e.target.style.borderColor = '#777'
}

const mensajeValido = e => {
	if(e.target.value !== '') {
		let data = e.target.value;
		let exp = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

		if (data.length<10)
			e.target.style.borderColor = 'red';
		else
			e.target.style.borderColor = '#777'
	}
}

const enviarCorreo = e => {
	if (nombre.style.borderColor === 'red')
		popUp.style.display = 'block';
	else if (apellido.style.borderColor === 'red')
		popUp.style.display = 'block';
	else if (correo.style.borderColor === 'red')
		popUp.style.display = 'block';
	else if (mensaje.style.borderColor === 'red')
		popUp.style.display = 'block';
	else {
		popUp.style.display = 'none';
		console.log('Datos Enviados');
	}
}

const loadDocument = () => {
	enviar.addEventListener("click", enviarCorreo);

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