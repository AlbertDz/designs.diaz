let herramientas = document.getElementById('herramientas');

listServicios.servicios.map(servicio => {
	herramientas.insertAdjacentHTML('beforeend',
		`<div class="card">
			<img src="${servicio.img}" class="logo">
		</div>`);
})