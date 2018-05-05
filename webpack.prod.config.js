const webpack = require('webpack');
const config = require('./webpack.base.config.js');
const compressionWebpackPlugin = require('compression-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

config.output.publicPath = '/dist/';
config.output.filename = 'bundle.js';

config.plugins = (config.plugins || []).concat([
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new compressionWebpackPlugin({
    asset: '[path].gz[query]',
    algorithm: 'gzip',
    test: /\.js$|\.css$|\.html$/,
    threshold: 10240,
    minRatio: 0.8
  }),
  new htmlWebpackPlugin({
    filename: '../index.html',
    template: './src/template/index.html',
    hash: true,
    inject: true
  })
]);

config.resolve = {
  alias: {
    vue: 'vue/dist/vue.min.js'
  }
}

module.exports = config