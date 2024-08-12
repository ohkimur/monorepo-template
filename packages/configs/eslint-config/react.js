import antfu from '@antfu/eslint-config'
import { sharedAntfuConfig, sharedAntfuLibConfig, sharedEslintConfigs } from './sharedConfigs.js'

export const reactConfig = antfu(
  {
    ...sharedAntfuConfig,
    react: true,
  },
  ...sharedEslintConfigs,
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'react-hooks/exhaustive-deps': 'off',
    },
  },
)

export const reactLibConfig = antfu(
  {
    ...sharedAntfuLibConfig,
    react: true,
  },
  ...sharedEslintConfigs,
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'react-hooks/exhaustive-deps': 'off',
    },
  },
)
