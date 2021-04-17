const path = require('path');
const { merge } = require('webpack-merge');
// const ESLintPlugin = require('eslint-webpack-plugin');
const common = require('./webpack.common');
const apiMock=require('mocker-api')

module.exports = merge(common, {
  mode: 'development',
  plugins: [
    // new ESLintPlugin({
    //   context: '/',
    //   exclude: [/node_modules/, 'config', '.eslintrc.js'],
    //   extensions: ['js', 'json'],
    // }),
  ],
  // 在生产环境和开发环境做不同的配置
  devtool: 'inline-source-map',
  devServer: {
    before(app){
      apiMock(app,path.resolve('mock/product'))
    },
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3001,
    //  代理
    proxy: {},
    //  开启HRM
    hot: true,
  },
});
