const globals = require("globals");
const js = require("@eslint/js");
const json = require("eslint-plugin-json");

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
    plugins: {
      json
    },
    rules: {
      "no-unused-vars": ["warn", { "args": "none" }],
      "no-undef": "warn"
    }
  },
  js.configs.recommended,
];