import { defineConfig } from 'vite'
import createVitePlugins from './config/vite/plugins/index'
// https://vite.dev/config/
export default defineConfig({
  plugins: createVitePlugins(),
})
