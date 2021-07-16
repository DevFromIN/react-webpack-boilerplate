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
  mode,

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },

  devtool,

  devServer: {
    port: 3000,
    host: '0.0.0.0',
    hot: true,
  },
};
