const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js',
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, '../src'),
      rouer: path.join(__dirname, '../src/router'),
      components: path.join(__dirname, '../src/components'),
      utils: path.join(__dirname, '../src/utils'),
      services: path.join(__dirname, '../src/services'),
      asserts: path.join(__dirname, '../src/asserts'),
      store:path.join(__dirname, '../src/store')
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        // 兼容处理js（es6等）
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader?cacheDirectory=true',
          options: {
            // es语法分析包
            presets: ['@babel/preset-react', '@babel/preset-env',],
            // 转化promise等为浏览器可兼容代码
            plugins: [
              '@babel/plugin-transform-runtime',
              '@babel/plugin-transform-react-jsx',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.less$/,
        // exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
            // loader: MiniCssExtractPlugin.loader,
            // options: {
            //   esModule: false,
            // },
          }, // 从 JS 中创建样式节点
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          }, // 转化 CSS 为 CommonJS
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env', {}]],
              },
            },
          },
          // 兼容css
          {
            loader: 'less-loader',
          }, // 编译 Less 为 CSS
          {
            loader: 'style-resources-loader',
            options: {
              patterns: [path.resolve(__dirname, '../src/global.less')],
              injector: 'append',
            },
          },
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
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].less',
    }),
  ],
};
