const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  plugins: [new ESLintPlugin({
    exclude:'/node_modules/',
    extensions: ['js', 'json'],
  })],
  // 在生产环境和开发环境做不同的配置
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3001,
    //  代理
    proxy: {},
    //  开启HRM
    // hot: true,
  },
});
