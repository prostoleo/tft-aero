import Glide, {
	Controls,
	Breakpoints,
	Swipe,
} from '@glidejs/glide/dist/glide.modular.esm';

const glideWhereEl = document.getElementById('glide-where');
const glideReviewsEl = document.getElementById('glide-reviews');
const glideInstructorsEl = document.getElementById('glide-instructors');
// console.log('glideInstructorsEl: ', glideInstructorsEl);

export function initGlide() {
	const sliderWhere = new Glide(glideWhereEl, {
		type: 'slider',
		perView: 2,
		gap: 10,
		// bound: true,
		rewind: true,

		breakpoints: {
			768: {
				perView: 1,
			},
		},
	}).mount({
		Controls,
		Breakpoints,
		Swipe,
	});

	const sliderReviews = new Glide(glideReviewsEl, {
		type: 'carousel',
		perView: 3,
		gap: 10,
		// bound: true,
		rewind: true,

		breakpoints: {
			768: {
				perView: 2,
			},
			450: {
				perView: 1,
			},
		},
	}).mount({
		Controls,
		Breakpoints,
		Swipe,
	});

	const sliderInstructors = new Glide(glideInstructorsEl, {
		type: 'carousel',
		perView: 4,
		gap: 10,
		// bound: true,
		rewind: true,

		breakpoints: {
			1365: {
				perView: 3,
			},
			550: {
				perView: 1,
			},
		},
	}).mount({
		Controls,
		Breakpoints,
		Swipe,
	});

	function destroyInstanceOnWideScreen(instance, screen = 1366) {
		window.innerWidth > screen && instance.destroy();
	}

	window.addEventListener('resize', () => {
		destroyInstanceOnWideScreen(sliderInstructors);
	});

	destroyInstanceOnWideScreen(sliderInstructors);
}
