const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.base.config.js');
const compressionWebpackPlugin = require('compression-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');

config.entry = {
  bundle: ['babel-polyfill', './src/main.js']
}
config.output.publicPath = './dist/';
config.output.filename = '[name].[chunkhash].js';
config.output.chunkFilename = '[name].[chunkhash].js';

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
    inject: true
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks(module){
      return module.context && module.context.indexOf('node_modules') !== -1;
    }
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest',
    minChunks: Infinity
  }),
  new cleanWebpackPlugin(
    [path.join(__dirname, 'dist')]
  )
]);

config.resolve = {
  alias: {
    vue: 'vue/dist/vue.min.js'
  }
}

module.exports = config