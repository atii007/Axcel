module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser for TypeScript
  parserOptions: {
    ecmaVersion: 2020, // Allows for parsing modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Enable JSX
    },
  },
  env: {
    browser: true, // Allow browser globals
    es2021: true, // Optional for ES2021 features
  },
  plugins: ['@typescript-eslint', 'react'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended', // React-specific linting rules
    'plugin:@typescript-eslint/recommended', // TypeScript-specific rules
    'plugin:react-hooks/recommended', // Enforces best practices with React hooks
    'next', // Next.js-specific linting rules
    'next/core-web-vitals', // Core Web Vitals for Next.js performance
  ],
  rules: {
    //JavaScript/TypeScript Best Practices
    'no-unused-vars': 'warn', // Warn on unused variables
    'no-console': ['error', { allow: ['info'] }],
    eqeqeq: 'error', // Enforce strict equality checks
    curly: 'error', // Require curly braces around blocks
    'no-else-return': 'error', // Disallow `else` after return in if blocks
    'no-var': 'error', // Disallow var, always use const or let
    'no-multiple-empty-lines': ['error', { max: 1 }], // Limit multiple empty lines
    'no-undef': 'off', // This will enforce undefined variable checking
    // Allow 'require' statements
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-ts-comment': [
      'warn',
      {
        'ts-expect-error': 'allow-with-description', // Allows ts-expect-error only with descriptions
        'ts-ignore': 'allow-with-description', // Allows ts-ignore only with descriptions
        'ts-nocheck': 'allow-with-description', // Allows ts-nocheck only with descriptions
      },
    ],

    //React-Specific Best Practices
    'react/react-in-jsx-scope': 'off', // Not needed in React 17+
    'react/prop-types': 'off', // Since TypeScript is used, prop-types are not necessary
    'react/jsx-uses-react': 'off', // Not needed in React 17+
    'react/jsx-uses-vars': 'error', // Prevent variables used in JSX from being incorrectly marked as unused
    'react/jsx-key': 'warn', // Warn if `key` prop is missing in lists
    'react/self-closing-comp': 'error', // Enforce self-closing tags where applicable
    'react/no-array-index-key': 'warn', // Avoid using array index as key in lists (performance best practice)
    'react-hooks/rules-of-hooks': 'error', // Ensure hooks are used correctly
    'react-hooks/exhaustive-deps': 'warn', // Ensure useEffect has necessary dependencies
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Ensure TypeScript files are targeted
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
      rules: {
        'no-unused-vars': 'off', // Disable the base rule
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            vars: 'all',
            args: 'all',
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            ignoreRestSiblings: true,
          },
        ],
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
}
