import antfu from '@antfu/eslint-config'
import { sharedAntfuConfig, sharedAntfuLibConfig, sharedEslintConfigs } from './sharedConfigs.js'

export const solidConfig = antfu(
  {
    ...sharedAntfuConfig,
    solid: true,
  },
  ...sharedEslintConfigs,
)

export const solidLibConfig = antfu(
  {
    ...sharedAntfuLibConfig,
    solid: true,
  },
  ...sharedEslintConfigs,
)
