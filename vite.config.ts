import path from 'node:path'
import vue from '@vitejs/plugin-vue'

import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5137,
    host: '0.0.0.0',
    // proxy: {
    //     [VITE_API_URL_PREFIX]: 'http://127.0.0.1:3000/',
    // },
  },
})
