module.exports = {
  root: true,
  extends: 'eslint:recommended',
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    'no-console': 'off',
    indent: ['error', 2],
    'linebreak-style': 'off', //强制使用一致的换行符风格
    quotes: ['error', 'single'], //使用单引号
    semi: ['error', 'always'] //结束添加分号
  },
  parser: 'vue-eslint-parser' // 格式化工具
};
