const path = require('path')
const webpack = require('webpack')

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.css/,
        loaders: ['style-loader', 'css-loader'],
      },
    ],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    host: '0.0.0.0',
    port: 3010,
    quiet: false,
    hot: true,
    inline: true,
    historyApiFallback: {
      index: '/index.html',
    },
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
}

module.exports = config
