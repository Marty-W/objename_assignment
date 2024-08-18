import eslint from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tseslintParser from "@typescript-eslint/parser";
import solidPlugin from "eslint-plugin-solid";

export default [
  eslint.configs.recommended,
  {
    rules: {
      "no-undef": "off",
    },
  },
  {
    files: ["**/src/*.{ts,tsx}"],
    plugins: {
      "@typescript-eslint": tseslint,
      solid: solidPlugin,
    },
    languageOptions: {
      parser: tseslintParser,
      parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...tseslint.configs["recommended"].rules,
      ...solidPlugin.configs["recommended"].rules,
    },
  },
];
