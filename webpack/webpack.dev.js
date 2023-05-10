const path = require('path')
const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
      open: true,
      hot: true,
      static: {       
        directory: path.resolve(__dirname, '..', './dist')
      }
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.name': JSON.stringify('Vishwas')
      }),
      new ReactRefreshWebpackPlugin()
    ]
}