import antfu from '@antfu/eslint-config'
import { sharedAntfuConfig, sharedAntfuLibConfig, sharedEslintConfigs } from './sharedConfigs.js'

export const baseConfig = antfu(
  {
    ...sharedAntfuConfig,
  },
  ...sharedEslintConfigs,
)

export const baseLibConfig = antfu(
  {
    ...sharedAntfuLibConfig,
  },
  ...sharedEslintConfigs,
)
