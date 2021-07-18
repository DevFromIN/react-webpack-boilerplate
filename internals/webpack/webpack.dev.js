const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = require('./webpack.base')({
  mode: 'development',

  // Don't use hashes in dev mode for better performance
  output: {
    assetModuleFilename: 'static/[name][ext][query]',
    chunkFilename: '[name].chunk.js',
    filename: '[name].js',
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  // Add development plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      // By default, this plugin will inject all files that are generated by webpack, e.g. bundle.js
      // See https://github.com/jantimon/html-webpack-plugin#options
      inject: true,
    }),

    new ReactRefreshWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false,
    }),
  ],

  devServer: {
    port: 3000,
    hot: true,
    host: '0.0.0.0',
    historyApiFallback: true,
  },

  // Emit a source map for easier debugging
  // See https://webpack.js.org/configuration/devtool/#devtool
  devtool: 'eval-source-map',

  performance: {
    hints: false,
  },
});
