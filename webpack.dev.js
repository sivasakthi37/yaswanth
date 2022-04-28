var webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';
var config = {
  devtool:"inline-source-map",
  // context: __dirname + '/src', // `__dirname` is root of project and `/src` is source
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    filename: 'static/js/[name].[chunkhash].js',
    path: path.resolve(__dirname, 'build')
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.join('src', 'index.html')
  }),],
  module: {
    rules: [
      {
        test: /\.js$/, // rule for .js files
        exclude: /node_modules/,
        loader: "babel-loader",// apply this loader for js files
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', // the order is important. it executes in reverse order !
          'css-loader' // this will load first !
        ]
      }
    ]
  }
};

module.exports = config;