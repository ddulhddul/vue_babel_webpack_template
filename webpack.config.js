// const { VueLoaderPlugin } = require('vue-loader')
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.vue$/,
//         exclude: /node_modules/,
//         loader: 'vue-loader'
//       },
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader'
//       }
//     ]
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './src/module1/index.html'
//     }),
//     new VueLoaderPlugin()
//   ]
// }

const path = require('path');
const glob = require("glob");
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: glob.sync("./src/*/*.js"),
  // entry: {
  //   home: './module1/index.js',
  //   home2: './module2/index.js',
  // },
  output: {
    // path: path.resolve(__dirname, 'dist'),
    path: path.resolve('./dist'),
    filename: '[name].js',
    publicPath: './',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      // template: './src/module1/index.html'
    }),
    new VueLoaderPlugin()
  ]
};
