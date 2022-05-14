import LazyLoad from 'vanilla-lazyload';

import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import MicroModal from 'micromodal';

import { initBurger } from './src/js/burger';
import { initGlide } from './src/js/glide';
// import { lazyLoadFunc } from './src/js/lazy-load';

import formHandler from './src/js/formHandler';

import './src/js/glide';
import maskPhone from './src/js/helpers/mask-phone';

// import 'awesome-notifications/dist/style.css';

(function () {
	const lazyLoadInstance = new LazyLoad({
		// Your custom settings go here
	});
})();

function initApp() {
	MicroModal.init();
	initBurger();
	initGlide();

	formHandler();
	maskPhone();
}

document.addEventListener('DOMContentLoaded', initApp);
