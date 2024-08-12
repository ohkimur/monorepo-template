import { defineConfig } from 'vite'

import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'
import baseConfig from './base.js'

const jsAssetsFilterFunction = (outputChunk) => {
  const entries = ['index.qwik.js', 'index.qwik.cjs']
  return entries.includes(outputChunk.fileName)
}

const esmEntryFileNames = (chunkInfo) => {
  // Move node_modules to external folder
  if (chunkInfo.name.includes('node_modules')) {
    return (
      `${chunkInfo.name
        .replace(/node_modules\/.pnpm/g, 'external')
        .replace(/node_modules/g, 'external')}.js`
    )
  }
  return '[name].qwik.js'
}

/** @type {import('vite').UserConfig} */
export default defineConfig({
  ...baseConfig,
  plugins: [
    tsconfigPaths(),
    dts({
      exclude: ['tests'],
      outDir: 'dist/types',
      rollupTypes: true,
      bundledPackages: ['@monorepo-template/*'],
    }),
    cssInjectedByJsPlugin({
      jsAssetsFilterFunction,
    }),
  ],
  build: {
    ...baseConfig.build,
    rollupOptions: {
      output: [
        {
          format: 'esm',
          dir: 'dist/esm',
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: esmEntryFileNames,
        },
        {
          format: 'cjs',
          dir: 'dist/cjs',
          entryFileNames: '[name].qwik.cjs',
          chunkFileNames: '[name].cjs',
        },
      ],
    },
  },
})
