const IS_PROD = process.env.NODE_ENV === 'production';

const plugins = [];

if (!IS_PROD) {
  plugins.push('react-refresh/babel');
}

module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],

  plugins,
};
