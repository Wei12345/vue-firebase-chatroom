const webpack = require('webpack');
const config = require('./webpack.base.config.js');
const htmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

config.output.publicPath = './dist/';
config.output.filename = 'bundle.js';

config.entry = (config.entry || []).concat([
    'webpack/hot/dev-server.js'
]);

config.plugins = (config.plugins || []).concat([
  new webpack.HotModuleReplacementPlugin(),
  new htmlWebpackPlugin({
  	alwaysWriteToDisk: true,
    filename: '../index.html',
    template: './src/template/index.html',
    hash: true,
    inject: true
  }),
  new htmlWebpackHarddiskPlugin()
]);

config.resolve = {
  alias: {
    vue: 'vue/dist/vue.esm.js'
  }
}

module.exports = config