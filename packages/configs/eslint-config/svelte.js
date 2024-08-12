import antfu from '@antfu/eslint-config'
import { sharedAntfuConfig, sharedAntfuLibConfig, sharedEslintConfigs } from './sharedConfigs.js'

export const svelteConfig = antfu(
  {
    ...sharedAntfuConfig,
    svelte: true,
  },
  ...sharedEslintConfigs,
)

export const svelteLibConfig = antfu(
  {
    ...sharedAntfuLibConfig,
    svelte: true,
  },
  ...sharedEslintConfigs,
)
