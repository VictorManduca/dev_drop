module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  env: {
    browser: true,
    es6: true
  },
  extends: ['plugin:@typescript-eslint/recommended', 'standard', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': 'error',
    'comma-dangle': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed']
  }
}
