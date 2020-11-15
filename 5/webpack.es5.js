const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

module.exports = merge(common, {
  output: {
    filename: 'sunmedia-es5.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  // plugin para generar el script con atributo nomodule en el index.html dinamicamente
  plugins: [
    new HtmlWebpackPlugin({  
      filename: 'index.html',
      template: './public/index.html',
      hash: true
    }),
    new ScriptExtHtmlWebpackPlugin({
      custom: [
        {
          test: /\.js$/,
          attribute: 'nomodule',
        },
      ]
    })
  ]  
});

