// npm init @eslint/config
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "standard-with-typescript",
    "plugin:vue/vue3-essential",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  //Vue
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parser: "@typescript-eslint/parser",
    project: "./tsconfig.app.json",
    extraFileExtensions: [".vue"],
  },
  plugins: ["@typescript-eslint", "vue",],
  rules: {
    //需要 let 或 const 而不是 var
    "no-var": "error",
    //禁止使用分号
    // semi: "error",
    //字符串使用单引号
    // quotes: ["error", "single"],
    //禁止混淆多行表达式
    "no-unexpected-multiline": "error",
    //不允许多个空行
    "no-multiple-empty-lines": ["error", { max: 1 }],
    //禁止声明空接口。
    "@typescript-eslint/no-empty-interface": "error",
    //在未设计用于处理 Promise 的地方禁止 Promise
    "@typescript-eslint/no-misused-promises": "error",
    //禁止使用未使用的变量。
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    //代码格式化
    "prettier/prettier": "error",
  },
};
