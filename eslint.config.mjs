import js from "@eslint/js";
import globals from "globals";

export default [
  // Configuration générale
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },

  // Configuration spécifique aux tests Jest
  {
    files: ["**/*.test.js"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
  },
];