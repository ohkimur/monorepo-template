import { createLogger, defineConfig } from 'vite'

import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'

const jsAssetsFilterFunction = (outputChunk) => {
  const entries = ['index.js', 'index.cjs']
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
  return '[name].js'
}

const logger = createLogger()
const loggerWarn = logger.warn

logger.warn = (msg, options) => {
  // Ignore dynamic imports warning
  if (msg.includes('vite:reporter') && msg.includes('also statically imported')) {
    return
  }

  loggerWarn(msg, options)
}

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [
    tsconfigPaths({
      loose: true,
    }),
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
  customLogger: logger,
  build: {
    sourcemap: true,
    minify: false,
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
          entryFileNames: '[name].cjs',
        },
      ],
    },
  },
})
