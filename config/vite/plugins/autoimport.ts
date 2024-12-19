import AutoImport from 'unplugin-auto-import/vite'

export default function autoImport() {
    return AutoImport({
        imports: ['vue', 'vue-router'],
        dts: 'src/auto-imports.d.ts',
    })
}