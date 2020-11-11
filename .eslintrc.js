module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: 'detect', // 告诉 eslint-plugin-react 自动检测 React 的版本
    },
  },
  extends: [
    'plugin:react/recommended', // 使用 @eslint-plugin-react 推荐规则
    'plugin:@typescript-eslint/recommended', // 使用 @typescript-eslint/eslint-plugin 推荐规则
    'prettier/@typescript-eslint',
    // 使用 eslint-config-prettier 禁用来自 @typescript-eslint/eslint-plugin 的 ESLint 规则避免 与 prettier 冲突
    'plugin:prettier/recommended',
    // 启用插件: eslint-plugin-prettier and eslint-config-prettier.
    // 这将要展示 prettier errors as ESLint errors.
    // 这条配置必须在最后面
  ],
  rules: {
    // 指定规则
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 允许不声明 React.FC
    '@typescript-eslint/no-explicit-any': 'off', // 允许使用 any
  },
};
