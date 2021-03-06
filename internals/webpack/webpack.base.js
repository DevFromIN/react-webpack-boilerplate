const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const IS_PROD = process.env.NODE_ENV === 'production';

module.exports = configs => ({
  mode: configs.mode,
  entry: path.join(process.cwd(), 'src/index'),

  output: {
    clean: true,
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/',
    ...configs.output,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset',
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset',
      },

      {
        test: /\.html$/,
        use: 'html-loader',
      },

      {
        // Preprocess our own .css files
        // This is the place to add your own loaders (e.g. sass/less etc.)
        // for a list of loaders, see https://webpack.js.org/loaders/#styling
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          IS_PROD ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },

      {
        // Preprocess 3rd party .css files located in node_modules
        test: /\.css$/,
        include: /node_modules/,
        use: [
          IS_PROD ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
        ],
      },
    ],
  },

  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.jsx'],
    mainFields: ['browser', 'jsnext:main', 'main'],
  },

  optimization: configs.optimization,
  plugins: configs.plugins,
  devServer: configs.devServer,
  devtool: configs.devtool,
  performance: configs.performance || {},
  target: 'web', // Make web variables accessible to webpack, e.g. window
});
