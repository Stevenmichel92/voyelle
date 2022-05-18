const mix = require('laravel-mix');

mix.webpackConfig({
	externals: {
		jquery: 'jQuery',
	},
});

mix
	.sass('scss/app.scss' , '')
	.setPublicPath('dist')
	.setResourceRoot('../dist/')
	.options({
		terser: {
			extractComments: false,
		},
	})
	.sourceMaps(false);
