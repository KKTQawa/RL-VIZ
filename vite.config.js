import { defineConfig } from 'vite'
import { resolve } from 'path'

function jevChessMoveProxy() {
    return {
        name: 'jev-chess-move-proxy',
        configureServer(server) {
            server.middlewares.use('/api/jev/chess-move', createJevHandler())
        },
        configurePreviewServer(server) {
            server.middlewares.use('/api/jev/chess-move', createJevHandler())
        },
    }
}

function createJevHandler() {
    return async (req, res) => {
        if (req.method !== 'POST') {
            res.writeHead(405, { Allow: 'POST' }).end()
            return
        }
        let raw = ''
        for await (const chunk of req) raw += chunk
        try {
            const { state, choices, apiKey } = JSON.parse(raw)
            if (!state || !choices || Object.keys(choices).length === 0 || Object.keys(choices).length > 255) {
                throw new Error('A non-empty legal move list of at most 255 options is required.')
            }
            const key = typeof apiKey === 'string' && apiKey.trim() ? apiKey.trim() : process.env.TYPESAFE_API_KEY
            if (!key) throw new Error('No Jev API key was provided or configured on the Vite server.')
            const apiResponse = await fetch('https://api.typesafe.ai/v1/systemone', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${key}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: 'jev-latest', state,
                    questions: {
                        chosen_move: {
                            type: 'choice',
                            instructions: '这是中国象棋对局。你执黑方（后手）。请基于当前棋盘局面，从 `legal_moves` 中选择一个最合适的合法走法；只能选择候选项，不能创建新走法。',
                            criteria: choices,
                        },
                    },
                }),
            })
            const payload = await apiResponse.json()
            if (!apiResponse.ok) throw new Error(payload?.message || `TypeSafe API returned ${apiResponse.status}`)
            const answer = payload?.answers?.chosen_move
            if (answer?.type !== 'choice' || !Object.hasOwn(choices, answer.choice)) {
                throw new Error('TypeSafe API returned an invalid choice response.')
            }
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ choice: answer.choice, confidence: answer.confidence }))
        } catch (error) {
            console.error('Jev chess move request failed:', error.message)
            res.writeHead(502, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ error: 'Unable to get a Jev move.' }))
        }
    }
}

export default defineConfig(({ mode }) => {
    const base = mode === 'production' ? '/RL-VIZ/' : '/'

    return {
        base,
        plugins: [jevChessMoveProxy()],
        build: {
            rollupOptions: {
                input: {
                    main: resolve(__dirname, 'index.html'),
                    chess: resolve(__dirname, 'src/pages/chess.html'),
                    maze: resolve(__dirname, 'src/pages/maze.html'),
                }
            }
        }
    }
})
