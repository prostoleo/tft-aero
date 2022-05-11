import LazyLoad from 'vanilla-lazyload';

import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';

import { initBurger } from './src/js/burger';
import { initGlide } from './src/js/glide';
// import { lazyLoadFunc } from './src/js/lazy-load';

import './src/js/glide';

(function () {
	const lazyLoadInstance = new LazyLoad({
		// Your custom settings go here
	});
})();

function initApp() {
	initBurger();
	initGlide();
	// lazyLoadFunc();
	/* const glideSlider = new Glide('.glide').mount({
		Controls,
		Breakpoints,
	});
	console.log('glideSlider: ', glideSlider); */
}

document.addEventListener('DOMContentLoaded', initApp);
