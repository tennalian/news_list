var webpack = require('webpack');


module.exports = {
	entry: [
		'webpack/hot/dev-server',
		'./app/main'
	],
	output: {
		path: './',
		filename: 'build.js'
	},
	resolve: {
        extensions: ['', '.js', '.jsx']
    },
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				},
				exclude: /\/node_modules/
			},
			{
				test: /\.scss$/,
				loader: 'style!css!sass',
				exclude: /\/node_modules/
			},
		]
	},
	devServer:{
		contentBase: './',
		port: 3000,
		hot: true,
		historyApiFallback: true
	}
};
