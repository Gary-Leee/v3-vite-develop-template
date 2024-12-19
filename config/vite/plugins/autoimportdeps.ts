import Components from 'unplugin-vue-components/vite'
export default () => {
    Components({
        dirs: ['src/components'],
        extensions: ['vue'],
        include: /\.vue$/,
    })
}