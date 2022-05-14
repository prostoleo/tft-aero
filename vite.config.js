import { defineConfig } from 'vite';
import path from 'path';
import dynamicImportVariables from '@rollup/plugin-dynamic-import-vars';

export default defineConfig({
	// ...
	// base: './',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './'),
		},
	},
	build: {
		rollupOptions: {
			plugins: [dynamicImportVariables()],
		},
	},
});
