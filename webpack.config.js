var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/assets/bundle');
var APP_DIR = path.resolve(__dirname, 'src');
var ASSET_PATH = path.resolve(__dirname, 'public');

var config = {
  entry: APP_DIR + '/assets/App.scss',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/assets'
  },
  module: {
    loaders: [
      {
        test   : /\.css$/,
        include: [path.resolve(__dirname, "not_exist_path")],
        loaders: ['style-loader', 'css-loader', 'resolve-url-loader']
      }, {
        test   : /\.scss$/,
        loader: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
      }, {
        test: /\.(png|jpg|gif)$/,
        loader: "file-loader?name=/images/[name].[ext]"
      }, {
        test: /\.(otf|ttf)$/,
        loader: "file-loader?name=/fonts/[name].[ext]"
      }
    ]
  }
};

module.exports = config;
