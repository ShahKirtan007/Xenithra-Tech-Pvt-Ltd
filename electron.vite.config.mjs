import { resolve } from 'path'
import { defineConfig } from 'electron-vite'

export default defineConfig({
  main: {
    build: {
      rollupOptions: {
        external: ['express', 'path', 'cookie-parser', 'express-session', 'cors', 'dotenv']
      }
    }
  },
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
    build: {
      rollupOptions: {
        input: {
          main: './src/renderer/index.html'
        }
      }
    }
  }
})
