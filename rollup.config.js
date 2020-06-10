import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

import pkg from './package.json';

export default [
	{
		input: 'dist/index.js',
		external: [
			'@angular/core',
			'leaflet',
			'leaflet.markercluster',
			'@asymmetrik/ngx-leaflet'
			//'tslib'
		],
		output: {
			banner: `/* @license ${pkg.name} - ${pkg.version} - ${pkg.copyright} + */`,
			file: `./dist/bundles/${pkg.artifactName}.umd.js`,
			format: 'umd',
			globals: {
				'@angular/core': 'ng.core',
				'leaflet': 'L',
				'@asymmetrik/ngx-leaflet': 'ngxLeaflet'
				//'tslib': 'tslib'
			},
			name: pkg.moduleName,
			sourcemap: true
		},
		plugins: [
			resolve(),
			commonjs()
		]
	}
];
