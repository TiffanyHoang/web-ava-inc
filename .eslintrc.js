module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  rules: {
    semi: [
      2,
      'never',
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: [
          '.js',
          '.jsx',
        ],
      },
    ],
    'max-len': 0,
    'import/prefer-default-export': 0,
  },
}
