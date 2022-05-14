// import LazyLoad from 'vanilla-lazyload';
import url from '../../assets/img/главная-фон.png';
// console.log('url: ', url);

export function lazyLoadFunc() {
	// if (import.meta.env.PROD) {
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

		if (import.meta.env.PROD) {
			pathWithoutExtension.split('/assets').pop();
		}

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

	/* const lazyLoadInstance = new LazyLoad({
		// Your custom settings go here
	}); */
}
