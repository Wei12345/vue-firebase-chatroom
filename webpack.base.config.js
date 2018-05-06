const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv-webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/main.js'
  ],
  output: {
    path: path.join(__dirname, 'dist')
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {
        test: /\.vue$/, 
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'style-loader!css-loader!sass-loader'
          }
        }
      },
      {test: /\.(png|jpe?g|gif|svg|ico|woff|woff2|eot|ttf)$/, loader: 'url-loader?limit=8192'},
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      vue: {
        postcss: [require('postcss-cssnext')()]
      }
    }),
    new dotenv()
  ]
}