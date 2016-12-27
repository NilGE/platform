 import webpack from 'webpack';

module.exports = {
	devtools: 'evel-source-map',
	entry: [
		'webpack-hot-middleware/client',
		'./client/index.js'
	],
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.json$/,
				include: __dirname + '/client',
				loader: 'json-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['react-hot', 'babel']
			}
		]
	}
};
