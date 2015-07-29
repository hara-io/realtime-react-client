var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')

//Define path
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var appPath = path.resolve(__dirname, 'src', 'client', 'app.js');
var buildPath = path.resolve(__dirname, 'build');
var stylesPath = path.resolve(__dirname, 'build', 'assets', 'css', 'styles.css');
var indexPath = path.resolve(__dirname, '.', 'index.html');

var plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new ExtractTextPlugin(stylesPath, {
    allChunks: true
  }),
  new HtmlWebpackPlugin({
    template: indexPath,
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
];

var config = {
  context: __dirname,
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    appPath
  ],
  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: '/js/'
  },
  plugins: plugins,
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['react-hot', 'babel-loader'], exclude: [nodeModulesPath] },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass') }
    ]
  }
};

module.exports = config;
