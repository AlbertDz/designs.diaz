let swiperWrapper = document.querySelector('.swiper-wrapper');
let proximamente = document.getElementById('proximamente');
let todos = document.getElementById('todos');

listGames.top.map(game => {
	swiperWrapper.insertAdjacentHTML('beforeend',
		`<div class="swiper-slide">
			<div class="card">
				<div class="slider">
					<img src="${game.img}">
					<h2>${game.title}</h2>
				</div>
				<div class="content">
					<p>${game.desc}</p>
					<a href="${game.url}">Jugar</a>
				</div>
			</div>
		</div>`);
})

listGames.proximamente.map(game => {
	proximamente.insertAdjacentHTML('beforeend',
		`<div class="card">
			<img src="${game.img}">
			<div class="description">
				<h3>${game.title}</h3>
				<p>${game.desc}</p>
			</div>
		</div>`);
})

listGames.todos.map(game => {
	todos.insertAdjacentHTML('beforeend',
		`<div class="card">
			<img src="${game.img}">
			<div class="description">
				<h3>${game.title}</h3>
				<p>${game.desc}</p>
				<a href="${game.url}">Jugar</a>
			</div>
		</div>`);
})
