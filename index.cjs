// @ts-check

/** @typedef {import('eslint').Linter.ConfigOverride} Override */
/** @typedef {import('eslint').Linter.Config} Config */

/**
 * @param {string} id
 * @returns {boolean}
 */
function resolved(id) {
  try {
    require.resolve(id)
    return true
  } catch {
    return false
  }
}

/** @type {Override[]} */
const astro = !resolved('astro')
  ? []
  : [
      {
        files: ['*.astro'],
        plugins: ['astro'],
        env: {
          'astro/astro': true,
        },
        parser: 'astro-eslint-parser',
        parserOptions: {
          parser: '@typescript-eslint/parser',
          extraFileExtensions: ['.astro'],
          sourceType: 'module',
        },
        rules: {
          '@typescript-eslint/triple-slash-reference': 'off',
          'astro/no-conflict-set-directives': 'error',
          'astro/no-unused-define-vars-in-style': 'error',
          'simple-import-sort/imports': 'off',
        },
      },
    ]

/** @type {Override[]} */
const typescript = !resolved('typescript')
  ? []
  : [
      {
        files: ['*.ts', '*.tsx'],
        extends: [
          'plugin:@typescript-eslint/recommended',
          'plugin:typescript-sort-keys/recommended',
        ],
        parser: '@typescript-eslint/parser',
        rules: {
          '@typescript-eslint/triple-slash-reference': 'off',
          '@typescript-eslint/consistent-type-imports': 'error',
          '@typescript-eslint/no-namespace': [
            'error',
            {
              allowDeclarations: true,
            },
          ],
        },
      },
    ]

const prettier = !resolved('prettier') ? [] : ['plugin:prettier/recommended']

/** @type {Config} */
module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: ['eslint:recommended', 'standard'].concat(prettier),
  plugins: ['simple-import-sort', 'unused-imports', 'sort-destructure-keys'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'sort-destructure-keys/sort-destructure-keys': [
      'error',
      {
        caseSensitive: true,
      },
    ],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'import/no-unresolved': 'off',
  },
  overrides: astro.concat(typescript),
}
