module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: 'standard',
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    "semi": "off",
    "indent": "off",
    "quotes": "off",
    "no-multiple-empty-lines": "off",
    'camelcase': "off",
    "quote-props": "off",
    "object-shorthand": "off"
  }
}
