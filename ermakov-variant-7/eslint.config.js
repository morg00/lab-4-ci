const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: "commonjs",
      globals: {
        module: "readonly",
        require: "readonly",
        describe: "readonly",
        it: "readonly"
      }
    }
  }
];
