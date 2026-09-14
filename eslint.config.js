import js from "@eslint/js";
import ts from "typescript-eslint";
import svelte from "eslint-plugin-svelte";
import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  ...svelte.configs["flat/recommended"],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ["**/*.svelte"],
    languageOptions: {
      parserOptions: {
        parser: ts.parser,
      },
    },
  },
  {
    ignores: ["build/", ".svelte-kit/", "dist/", "pb_migrations/"],
  },
  {
    files: ["src/lib/server/admin.js", "src/routes/api/admin/**/*.js", "src/routes/api/send-email/+server.js"],
    rules: {
      "@typescript-eslint/ban-ts-comment": "off",
    },
  },
];
