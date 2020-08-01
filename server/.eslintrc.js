export default {
  root: true,
  env: {
    'es6': true,
    'node': true
  },
  extends: [
    'eslint:recommended',
  ],
  rules: {
    semi: ["error", "never"],
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }]
  },
  parserOptions: {
    "sourceType": "module"
  }
}