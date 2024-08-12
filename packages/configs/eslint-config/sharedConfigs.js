import tailwind from 'eslint-plugin-tailwindcss'

/** @type {import("@antfu/eslint-config").OptionsConfig} */
export const sharedAntfuConfig = {
  formatters: true,
  lessOpinionated: true,
}

/** @type {import("@antfu/eslint-config").OptionsConfig} */
export const sharedAntfuLibConfig = {
  ...sharedAntfuConfig,
  type: 'lib',
}

/** @type {import("eslint").Linter.Config} */
export const sharedEslintConfigs = [
  ...tailwind.configs['flat/recommended'],
  {
    ignores: [
      'dist',
      'out',
      'build',
      'packages/icons/**/src/**/icons',
    ],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      'tailwindcss/no-custom-classname': 'off',
      'node/prefer-global/process': 'off',
    },
  },
]
