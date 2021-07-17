const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = configs => ({
  mode: configs.mode,
  entry: configs.entry,
  output: {
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/',
    assetModuleFilename: 'static/[hash][ext][query]',
    ...configs.output,
  },
  optimization: configs.optimization,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },

      {
        // Preprocess our own .css files
        // This is the place to add your own loaders (e.g. sass/less etc.)
        // for a list of loaders, see https://webpack.js.org/loaders/#styling
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },

      {
        // Preprocess 3rd party .css files located in node_modules
        test: /\.css$/,
        include: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },

      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        type: 'asset',
      },

      {
        test: /\.html$/,
        use: 'html-loader',
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    ...configs.plugins,
  ],

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  performance: configs.performance || {},

  devtool: configs.devtool,

  devServer: {
    port: 3000,
    hot: true,
    host: '0.0.0.0',
    historyApiFallback: true,
  },
});
