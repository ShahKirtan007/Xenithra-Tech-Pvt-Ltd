import { resolve } from 'path'
import { defineConfig } from 'electron-vite'

export default defineConfig({
  main: {},
  preload: {},
  renderer: {
    publicDir: 'Public',
    server: {
      port: 3000
    },
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [],
    assetsInclude: ['**/*.html'],
    rollupOptions: {
      input: './src/renderer/index.html'
    }
  }
})
