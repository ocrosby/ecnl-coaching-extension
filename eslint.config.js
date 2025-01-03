const globals = require("globals");
const js = require("@eslint/js");

module.exports = [
  {
    languageOptions: {
      ecmaVersion: 12,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        chrome: "readonly",
        document: "readonly",
        require: "readonly",
        module: "readonly"
      }
    },
    rules: {
      "no-unused-vars": ["warn", { "args": "none" }],
      "no-undef": "warn"
    }
  },
  js.configs.recommended,
];