import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [vue(), jsx()],
  server: {
    host: 'kits.silent.localhost',
  },
  build: {
    brotliSize: false,
  },
})
