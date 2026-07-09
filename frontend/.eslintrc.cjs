module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended'],
  plugins: ['react', 'react-hooks'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['dist', 'node_modules'],
  rules: {
    'no-unused-vars': ['error', { varsIgnorePattern: '^React$' }],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
