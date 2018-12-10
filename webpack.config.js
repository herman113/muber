var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
require("@babel/polyfill");


module.exports = {
  entry: ["@babel/polyfill", './src/index.js'],
  output: {
    path: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};




  // devServer: {
  //   proxy: {
  //     'target': 'http://localhost:3050'
  //   }
  // }