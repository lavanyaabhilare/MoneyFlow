module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    'react/no-unescaped-entities': 0,
    'react-hooks/exhaustive-deps': 0,
    'no-unused-vars': 0,
    '@next/next/no-html-link-for-pages': 0,
  },
  ignorePatterns: [
    'node_modules/*',
    '.next/*',
    'out/*',
    'public/*',
    '**/*.test.*',
  ],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
} 