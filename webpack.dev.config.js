const webpack = require('webpack');
const config = require('./webpack.base.config.js');
const htmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

config.entry = {
  bundle: ['babel-polyfill', './src/main.js', 'webpack/hot/dev-server.js']
}
config.output.publicPath = '/dist/';
config.output.filename = '[name].js';
config.output.chunkFilename = '[name].js';

config.plugins = (config.plugins || []).concat([
  new webpack.HotModuleReplacementPlugin(),
  new htmlWebpackPlugin({
  	alwaysWriteToDisk: true,
    filename: '../index.html',
    template: './src/template/index.html',
    hash: true,
    inject: true
  }),
  new htmlWebpackHarddiskPlugin(),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks(module){
      return module.context && module.context.indexOf('node_modules') !== -1;
    }
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest',
    minChunks: Infinity
  })
]);

config.resolve = {
  alias: {
    vue: 'vue/dist/vue.esm.js'
  }
}

module.exports = config