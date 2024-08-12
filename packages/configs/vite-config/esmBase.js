import { defineConfig } from 'vite'

import baseConfig from './base.js'

/** @type {import('vite').UserConfig} */
export default defineConfig({
  ...baseConfig,
  build: {
    ...baseConfig.build,
    rollupOptions: {
      output: baseConfig.build.rollupOptions.output.filter(
        output => output.format === 'esm',
      ),
    },
  },
})
