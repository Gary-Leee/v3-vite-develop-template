import vue from '@vitejs/plugin-vue'
import AutoImport from './autoimport'
import Restart from './restart'
import  Component  from './autoimport'
export default function createVitePlugins() {
    return [
        vue(), // vite plugin for Vue.js
        AutoImport(),
        Restart(),
        Component()
    ]
}