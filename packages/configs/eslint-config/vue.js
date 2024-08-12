import antfu from '@antfu/eslint-config'
import { sharedAntfuConfig, sharedAntfuLibConfig, sharedEslintConfigs } from './sharedConfigs.js'

export const vueConfig = antfu(
  {
    ...sharedAntfuConfig,
    vue: true,
  },
  sharedEslintConfigs,
)

export const vueLibConfig = antfu(
  {
    ...sharedAntfuLibConfig,
    vue: true,
  },
  sharedEslintConfigs,
)
