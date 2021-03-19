module.exports = {
  root: true,
  env: {
    node: true,
  },
  // 总是使用单引号
  // singleQuote: true,
  jsxBracketSameLine: true,

  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        mocha: true,
      },
    },
  ],
};
