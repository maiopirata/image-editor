'use strict';
var webpack = require('webpack');
var path = require('path');

module.exports = {
	devtool: 'inline-source-map',
  entry: [
    // 'webpack-dev-server/client?http://localhost:9000',
    // 'webpack/hot/only-dev-server',
    // 'react-hot-loader/patch',
    path.join(__dirname, 'app/index.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader?modules&localIdentName=bundle'
      },
    ]
  }
};
