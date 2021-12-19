module.exports = {
  root: true,
  env: {
    node: false,
    jest: true,
  },
  extends: [],
  rules: {
    'arrow-parens': ['warn', 'as-needed'],
    indent: ['error', 2, { MemberExpression: 'off' }],

    'no-undef': ['error'],

    'operator-linebreak': ['error', 'before'],

    'vue/match-component-file-name': [
      'error',
      {
        extensions: ['js', 'vue'],
        shouldMatchCase: false,
      },
    ],
  },
  globals: {},
};
