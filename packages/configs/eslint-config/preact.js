import antfu from '@antfu/eslint-config'
import { sharedAntfuConfig, sharedAntfuLibConfig, sharedEslintConfigs } from './sharedConfigs.js'

export const preactConfig = antfu(
  {
    ...sharedAntfuConfig,
  },
  ...sharedEslintConfigs,
)

export const preactLibConfig = antfu(
  {
    ...sharedAntfuLibConfig,
  },
  ...sharedEslintConfigs,
)
