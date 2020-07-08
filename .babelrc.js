module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    'import-graphql',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-throw-expressions',
  ],
};
