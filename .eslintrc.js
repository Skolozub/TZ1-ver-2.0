module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended', // 'React' is defined but never used
  ],
  env: {
    es6: true, // 'Promise' is not defined.
    browser: true, // 'document' is not defined
    commonjs: true, // 'require' is not defined
    node: true, // 'process' is not defined
  },
  settings: {
    'react': {
      version: '16.7', // Warning: React version not specified in eslint-plugin-react settings
    },
    'import/resolver': {
      webpack: {
        env: 'development',
      },
    },
  },
  // if using ES proposals is essential:
  parser: 'babel-eslint', // Unexpected token
  parserOptions: {
    ecmaVersion: 2018, // Parsing error: Unexpected token ...
    sourceType: 'module', // Parsing error: The keyword 'import' is reserved
  },
  rules: {
    // Added rules (fixable -> warn)
    'quotes': ['warn', 'single'],
    'object-curly-spacing': ['warn', 'always'],
    'semi': ['warn', 'never'],
    'eol-last': ['warn', 'always'],
    'linebreak-style': ['warn', 'unix'],
    'no-trailing-spaces': ['warn'],
    'arrow-parens': ['warn', 'as-needed'],
    'react/jsx-closing-bracket-location': ['warn', 'tag-aligned'],
    'react/self-closing-comp': ['warn'],
    'react/jsx-tag-spacing': ['warn'],
    'quote-props': ['warn', 'consistent-as-needed'],
    'indent': ['warn', 2],
    'space-before-function-paren': ['warn', {
      anonymous:  'always',
      named:      'never',
      asyncArrow: 'always' }],
    'comma-dangle': ['warn', {
      arrays:    'always-multiline',
      objects:   'always-multiline',
      imports:   'always-multiline',
      exports:   'always-multiline',
      functions: 'always-multiline' }],

    // Added rules (non-fixable -> error)
    'no-duplicate-imports': ['error'],
    'no-implicit-globals': ['error'],
    'no-restricted-globals': ['error',
      'closed', 'frames', 'history', 'length', 'location', 'name', 'navigator', 'opener', 'parent', 'screen', 'status', 'top'],
    'no-unused-vars': ['error', {
      argsIgnorePattern: '^_' }],

    // Disabled rules
    'no-console': ['off'],
    'react/prop-types': ['off'],
  },
}
