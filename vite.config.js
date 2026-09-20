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
                            instructions: [
                                '你执黑方。',
                                '从给定候选走法中选择对当前黑方局面更有利的一步。',
                                '不要重新判断候选是否合法，也不要创造候选列表之外的走法。',
                                '优先比较：避免将死或强制失子、直接战术威胁、黑将安全、重大子力损失。',
                                '若战术结果接近，再比较局面活动性和位置价值。',
                            ],
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
