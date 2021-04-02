const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
 
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename:'[name].bundel.js',
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        // 兼容处理js（es6等）
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader?cacheDirectory=true',
          options: {
            // es语法分析包
            presets: ['@babel/preset-env'],
            // 转化promise等为浏览器可兼容代码
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
            },
          }, // 从 JS 中创建样式节点
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          }, // 转化 CSS 为 CommonJS
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env', {}]],
              },
              execute: true,
            },
          }, //兼容css
          'less-loader', // 编译 Less 为 CSS
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: {
          loader: 'url-loader',
          options: {
            // limit: 8192,
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].less',
    }),
  ],

  watch: true,
};
