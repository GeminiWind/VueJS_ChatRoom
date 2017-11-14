module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'airbnb',
  // required to lint *.vue files
  plugins: ["vue"],
  // add your custom rules here
  settings: {
    "import/resolver": {
      webpack: {
        config: "config/webpack/base.config.js"
      }
    }
  },
  rules: {
    'vue/jsx-uses-vars': 2,
    // disable console.log error
    "no-console": 0,
    'import/no-extraneous-dependencies': 0,
    "import/extensions": ["error", "always", {
      "js": "never",
      "vue": "never"
    }],
    "no-param-reassign": [2, { "props": false }],
    "no-shadow": 0,
  },
  globals: {}
}
