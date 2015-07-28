var webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');
var mainPath = path.resolve(__dirname, 'src/client', 'app.js');

var plugins = [
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      screw_ie8: true,
      warnings: false
    }
  })
]

var config = {
  devtool: 'cheap-source-map',
  entry: mainPath,
  output: {
    path: buildPath,
    filename: 'bundle.js'
  },
  plugins: plugins,
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: [nodeModulesPath] },
      { test: /\.css$/, loader: 'style!css' }
    ]
  }
};

module.exports = config;
