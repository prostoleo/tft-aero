import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';

import { initBurger } from './src/js/burger';
import { initGlide } from './src/js/glide';

import './src/js/glide';

function initApp() {
	initBurger();
	initGlide();

	/* const glideSlider = new Glide('.glide').mount({
		Controls,
		Breakpoints,
	});
	console.log('glideSlider: ', glideSlider); */
}

document.addEventListener('DOMContentLoaded', initApp);
