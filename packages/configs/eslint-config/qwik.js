import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'
import { sharedAntfuConfig, sharedAntfuLibConfig, sharedEslintConfigs } from './sharedConfigs.js'

const compat = new FlatCompat()
const compatConfigs = compat.config(
  {
    extends: [
      'plugin:qwik/recommended',
    ],
    rules: {
      'qwik/valid-lexical-scope': 'off',
      'qwik/jsx-no-script-url': 'off',
    },
  },
)

export const qwikConfig = antfu(
  {
    ...sharedAntfuConfig,
  },
  ...sharedEslintConfigs,
  ...compatConfigs,
)

export const qwikLibConfig = antfu(
  {
    ...sharedAntfuLibConfig,
  },
  ...sharedEslintConfigs,
  ...compatConfigs,
)
