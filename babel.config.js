const IS_PROD = process.env.NODE_ENV === 'production';

const plugins = ['@babel/plugin-transform-runtime'];

if (!IS_PROD) {
  plugins.unshift('react-refresh/babel');
}

module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],

  plugins,
};
