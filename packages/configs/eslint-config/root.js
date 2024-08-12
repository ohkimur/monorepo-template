import antfu from '@antfu/eslint-config'
import { sharedAntfuConfig, sharedEslintConfigs } from './sharedConfigs.js'

export const rootConfig = antfu(
  {
    ...sharedAntfuConfig,
  },
  ...sharedEslintConfigs,
  {
    ignores: ['apps/**/*', 'packages/**/*', 'playgrounds/**/*'],
  },
)
