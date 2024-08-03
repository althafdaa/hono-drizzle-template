import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default {
  extends: ['@hono/eslint-config'],
  files: ['./src/**/*.{js,mjs,cjs,ts}'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
  },
  globals: globals.browser,
  plugins: ['@typescript-eslint'],
  rules: {
    // Add your custom rules here
  },
};
