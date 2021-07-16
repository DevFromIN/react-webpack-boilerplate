const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const IS_PROD = process.env.NODE_ENV === 'production';

let devtool = 'eval-source-map';
let mode = 'development';

if (IS_PROD) {
  // you can use devtool="source-map" for production builds with high quality SourceMaps.
  // Learn more at https://webpack.js.org/configuration/devtool/#devtool
  devtool = false;
  mode = 'production';
}

module.exports = {
  entry: ['./src/app'],

  mode,

  output: {
    path: path.resolve(__dirname, 'build'),
    assetModuleFilename: 'static/[hash][ext][query]',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: 'babel-loader',
      },

      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },

      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        type: 'asset',
      },

      {
        test: /\.html$/i,
        use: 'html-loader',
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin(),

    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devtool,

  devServer: {
    port: 3000,
    host: '0.0.0.0',
    hot: true,
  },
};
