var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')

//Define path
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var appPath = path.resolve(__dirname, 'src', 'client', 'app.js');
var buildPath = path.resolve(__dirname, 'build');
var indexPath = path.resolve(__dirname, 'index.html');

var plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new ExtractTextPlugin('layout.css', {
    allChunks: true
  }),
  new HtmlWebpackPlugin({
    template: indexPath
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
    publicPath: ''
  },
  plugins: plugins,
  resolve: {
    extensions: ['', '.js', '.jsx', 'scss']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel-loader'],
        exclude: [nodeModulesPath]
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.eot$|\.ttf$|\.wav$|\.mp3$/,
        loader: 'file'
      }
    ],
    noParse: /\.min\.js/
  }
};

module.exports = config;
