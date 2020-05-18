let swiperWrapper = document.querySelector('.swiper-wrapper');
const games = [
	// {title: 'Adventure', img: 'assets/bg.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua.', url: 'games/adventure/index.html'},
	{title: 'Titulo 2', img: 'assets/bg-games.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua.', url: '#'},
	{title: 'Titulo 3', img: 'assets/bg-histories.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua.', url: '#'},
	{title: 'Titulo 4', img: 'assets/bg.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua.', url: '#'},
	{title: 'Titulo 5', img: 'assets/bg-games.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua.', url: '#'},
	{title: 'Titulo 6', img: 'assets/bg-histories.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua.', url: '#'},
	{title: 'Titulo 7', img: 'assets/bg-games.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua.', url: '#'},
];

games.map(game => {
	swiperWrapper.insertAdjacentHTML('beforeend',
		`<div class="swiper-slide">
			<div class="card">
				<div class="slider">
					<img src="${game.img}">
					<h2>${game.title}</h2>
				</div>
				<div class="content">
					<p>${game.description}</p>
					<a href="${game.url}">Jugar</a>
				</div>
			</div>
		</div>`);
});
