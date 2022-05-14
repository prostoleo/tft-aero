import LazyLoad from 'vanilla-lazyload';

import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import MicroModal from 'micromodal';

// import './assets/css/awesome-notifications.css';
// import './assets/fonts/fonts.css';
// import './assets/scss/main.scss';

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
	// lazyLoadFunc();
	// lazyLoadLocal();
})();

function initApp() {
	if (import.meta.env.PROD) {
		lazyLoadLocalV2();
	}
	MicroModal.init();
	initBurger();
	initGlide();
	// lazyLoadFunc();
	/* const glideSlider = new Glide('.glide').mount({
		Controls,
		Breakpoints,
	});
	console.log('glideSlider: ', glideSlider); */
	formHandler();
	maskPhone();
}

function lazyLoadLocalV2() {
	// const imgUrl = new URL('./img.png', import.meta.url).href

	const lazyElements = Array.from(
		document.querySelectorAll('img.lazy[data-src]')
	);

	const imgUrls = lazyElements.forEach((el) => {
		console.log('el.dataset.src: ', el.dataset.src);
		const realImgURl = new URL(`.${el.dataset.src}`, import.meta.url).href;
		// const realImgURl = new URL(
		// 	`./assets${el.dataset.src.split('/assets').pop()}`,
		// 	import.meta.url
		// ).href;
		console.log('realImgURl: ', realImgURl);

		el.dataset.src = realImgURl;
	});
}

document.addEventListener('DOMContentLoaded', initApp);

/* function lazyLoadLocal() {
	const lazyElements = Array.from(
		document.querySelectorAll('img.lazy[data-src]')
	);
	// console.log('lazyElements: ', lazyElements);

	const imgLocalPathsArray = lazyElements.map((el) => el.dataset.src);
	// console.log('imgLocalPathsArray: ', imgLocalPathsArray);

	imgLocalPathsArray.forEach(async (path, i) => {
		console.log('path: ', path);
		// import imgUrl from `../..${path}`
		let imgUrl = null;

		const lastIndexOfPoint = path.lastIndexOf('.');
		let pathWithoutExtension = null;

		pathWithoutExtension = path.slice(0, lastIndexOfPoint);

		// if (import.meta.env.PROD) {
		// 	pathWithoutExtension.split('/assets').pop();
		// }

		const pathExtension = path.split('.').pop();

		switch (pathExtension) {
			case 'svg':
				imgUrl = await import(`./${pathWithoutExtension}.svg`);
				break;
			case 'png':
				imgUrl = await import(`./${pathWithoutExtension}.png`);
				break;
			case 'jpg':
				imgUrl = await import(`./${pathWithoutExtension}.jpg`);
				break;
			case 'jpeg':
				imgUrl = await import(`./${pathWithoutExtension}.jpeg`);
				break;
			case 'webp':
				imgUrl = await import(`./${pathWithoutExtension}.webp`);
				break;
			case 'gif':
				imgUrl = await import(`./${pathWithoutExtension}.gif`);
				break;
			case 'avif':
				imgUrl = await import(`./${pathWithoutExtension}.avif`);
				break;

			default:
				break;
		}

		// if (import.meta.env.DEV) {
		// 	imgUrl = await import(`../..${path}`);
		// }
		// if (import.meta.env.PROD) {
		// imgUrl = await import(`./${path}`);
		console.log('imgUrl: ', imgUrl);
		// }

		// const imgUrl = await import(`${import.meta.env.DEV ? '../..' : ''}${path}`);
		// console.log('imgUrl: ', imgUrl);
		lazyElements[i].dataset.src = imgUrl.default;
	});
	// }

	// const lazyLoadInstance = new LazyLoad({
	// 	// Your custom settings go here
	// });
} */
