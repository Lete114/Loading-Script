const { merge } = require('webpack-merge')
const { join } = require('path')
const base = require('./base')

const webpack = {
  mode: 'development', // 环境模式 development production
  devServer: {
    port: 1104,
    static: join(__dirname, '../test'),
    hot: true, // 启用热重载
    compress: true // 压缩
  }
}

module.exports = merge(base, webpack)
