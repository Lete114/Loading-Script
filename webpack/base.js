const { join } = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: join(__dirname, '../index.js'),
  output: {
    path: join(__dirname, '../dist'),
    filename: './loading-script.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, // 不编译node_modules下的文件
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [ new CleanWebpackPlugin()]
}
