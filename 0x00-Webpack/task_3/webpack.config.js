const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); // to access built-in plugins

module.exports = {
  entry: ['./header/header.js', './body/body.js', './footer/footer.js'],
  output: {
    path: path.resolve(__dirname, './public'),
    filename: '[name].bundle.js',
    clean: true,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
     {
       test: /\.(png|svg|jpg|jpeg|gif)$/i,
       type: 'asset/resource',
     },
    ],
  },
  plugins: [new HtmlWebpackPlugin(), new webpack.SourceMapDevToolPlugin()],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
  performance: { hints: false }
};