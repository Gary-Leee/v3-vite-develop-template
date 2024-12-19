import ViteRestart from 'vite-plugin-restart'

export default function Restart() {
    return ViteRestart({
        restart: ['/index.ts']
    })  // Restart the server on changes
}
