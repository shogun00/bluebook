const path = require('path')

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.css/,
        loaders: ['style-loader', 'css-loader']
      },
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3001
  }
}

module.exports = config
