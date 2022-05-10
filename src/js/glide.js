import Glide, {
	Controls,
	Breakpoints,
	Swipe,
} from '@glidejs/glide/dist/glide.modular.esm';

const glideWhereEl = document.getElementById('glide-where');

export function initGlide() {
	new Glide(glideWhereEl, {
		type: 'slider',
		perView: 2,
		gap: 10,
		bound: true,
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
}
