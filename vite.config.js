import { defineConfig } from 'vite'

export default defineConfig(({ command, mode }) => {
    // mode 为 'production' 时使用 /RL-VIZ/，否则使用 /
    const base = mode === 'production' ? '/RL-VIZ/' : '/'

    return {
        base: base,
    }
})