let swiperWrapper = document.querySelector('.swiper-wrapper');
const games = [
	{title: 'Adventure', img: 'assets/bg.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua.', url: 'games/adventure/index.html'},
	{title: 'Titulo 2', img: 'assets/bg-games.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua.', url: '#'},
	{title: 'Titulo 3', img: 'assets/bg-histories.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua.', url: '#'},
	{title: 'Titulo 4', img: 'assets/bg.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua.', url: '#'},
	{title: 'Titulo 5', img: 'assets/bg-games.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua.', url: '#'},
	{title: 'Titulo 6', img: 'assets/bg-histories.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua.', url: '#'},
	{title: 'Titulo 7', img: 'assets/bg-games.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua.', url: '#'},
];

for (let i=0; i < 7; i++) {
	swiperWrapper.insertAdjacentHTML('beforeend', `<div class="swiper-slide">
													<div class="card">
														<div class="slider">
															<img src="${games[i].img}">
															<h2>${games[i].title}</h2>
														</div>
														<div class="content">
															<p>${games[i].description}</p>
															<a href="${games[i].url}">Jugar</a>
														</div>
													</div>
												</div>`);
}
