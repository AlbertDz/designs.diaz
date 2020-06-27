let body = document.querySelector('body');

body.insertAdjacentHTML('afterbegin',
	`<div class="loading">
		<div class="wavy">
			<span style="--i:1;">D</span>
			<span style="--i:2;">e</span>
			<span style="--i:3;">s</span>
			<span style="--i:4;">i</span>
			<span style="--i:5;">g</span>
			<span style="--i:6;">n</span>
			<span style="--i:7;">s</span>
			<span style="--i:8;"></span>
			<span style="--i:9;">D</span>
			<span style="--i:10;">i</span>
			<span style="--i:11;">a</span>
			<span style="--i:12;">z</span>
			<span style="--i:13;">.</span>
			<span style="--i:14;">.</span>
			<span style="--i:15;">.</span>
		</div>
	</div>`
);

document.addEventListener('DOMContentLoaded', () => {
	let loading = document.querySelector('.loading');
	
    loading.style.display = 'none';
});