// var webpack = require('webpack')
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
var fs = require('fs')
var path = require('path')

var packageInfo = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf-8'))

var config = {
  entry: path.resolve(__dirname, '../index.js'),
  output: {
    library: packageInfo.name,
    libraryTarget: 'umd',
    path: path.resolve(__dirname, '../build'),
    filename: packageInfo.name + '.js',
    umdNamedDefine: true
  },

  devtool: 'cheap-module-inline-source-map',

  module: {
    rules: []
  },

  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'bundle-info.html',
      logLevel: 'info'
    })
  ]
}

module.exports = config
