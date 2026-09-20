const PIECE_NAME = {
    black: { "将": "黑将", "仕": "黑仕", "象": "黑象", "车": "黑车", "马": "黑马", "炮": "黑炮", "卒": "黑卒" },
    red: { "帅": "红帅", "士": "红士", "相": "红相", "车": "红车", "马": "红马", "炮": "红炮", "兵": "红兵" },
};

/** Jev only chooses from the Board-generated legal candidates. */
export class EnemyAi {
    boardToGrid(board) {
        const grid = Array.from({ length: 10 }, () => Array(9).fill("空"));
        for (const piece of board.pieces) {
            grid[piece.r][piece.c] = PIECE_NAME[piece.p][piece.t] || `${piece.p}-${piece.t}`;
        }
        return grid;
    }

    describeMove(board, move) {
        const piece = board.getPbyId(move.pieceId);
        const name = piece ? (PIECE_NAME[piece.p][piece.t] || piece.t) : `棋子#${move.pieceId}`;
        const target = board.get(move.toR, move.toC);
        const capture = target ? `，吃掉${PIECE_NAME[target.p][target.t] || target.t}` : "";
        const nextBoard = board.clone();
        const nextPiece = nextBoard.getPbyId(move.pieceId);
        nextBoard.move(nextPiece, move.toR, move.toC);
        const opponent = piece?.p === "black" ? "red" : "black";
        const givesCheck = nextBoard.isInCheck(opponent);
        const isThreatened = nextBoard.getAllLegalMoves(opponent, false)
            .some(candidate => candidate.toR === move.toR && candidate.toC === move.toC);
        const tacticalInfo = [
            givesCheck ? "将军" : null,
            isThreatened ? "落点受对方攻击" : "落点暂未受对方攻击",
        ].filter(Boolean).join("；");
        return `${name}：(${move.fromR}, ${move.fromC}) -> (${move.toR}, ${move.toC})${capture}；${tacticalInfo}`;
    }

    serializeMove(board, move) {
        const piece = board.getPbyId(move.pieceId);
        return {
            piece: piece ? (PIECE_NAME[piece.p][piece.t] || piece.t) : `棋子#${move.pieceId}`,
            from: [move.fromR, move.fromC],
            to: [move.toR, move.toC],
        };
    }

    async step(board, side = "black") {
        return this.chooseMove(board, side);
    }

    async chooseMove(board, side = "black") {
        const moves = board.getAllLegalMoves(side);
        if (moves.length === 0) return null;

        const choices = Object.fromEntries(moves.map((move, index) => [
            `move_${String(index).padStart(3, "0")}`,
            this.serializeMove(board, move),
        ]));
        const state = {
            game: "中国象棋",
            side_to_move: side === "black" ? "黑" : "红",
            coordinate_system: {
                origin: "top_left",
                row_range: [0, 9],
                column_range: [0, 8],
                row_direction: "top_to_bottom",
                column_direction: "left_to_right",
            },
            board: this.boardToGrid(board),
            candidate_moves: choices,
            candidate_moves_are_rule_verified_legal: true,
        };

        const jevRequest = {
            model: "jev-latest",
            state,
            questions: {
                chosen_move: {
                    type: "choice",
                    instructions: [
                        "你执黑方。",
                        "从给定候选走法中选择对当前黑方局面更有利的一步。",
                        "不要重新判断候选是否合法，也不要创造候选列表之外的走法。",
                        "优先比较：避免将死或强制失子、直接战术威胁、黑将安全、重大子力损失。",
                        "若战术结果接近，再比较局面活动性和位置价值。",
                    ],
                    criteria: choices,
                },
            },
        };
        // Display the exact Jev request structure, deliberately excluding the user's API key.
        window.dispatchEvent(new CustomEvent("jev-request", { detail: jevRequest }));

        try {
            const response = await fetch("/api/jev/chess-move", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                // User-entered keys are memory-only and never written to disk by the app.
                body: JSON.stringify({ state, choices, apiKey: window.jevApiKey || undefined }),
            });
            if (!response.ok) throw new Error(`Jev request failed (${response.status})`);

            const { choice, confidence } = await response.json();
            const index = Number.parseInt(choice?.replace("move_", ""), 10);
            if (Number.isInteger(index) && index >= 0 && index < moves.length && choices[choice]) {
                console.info(`Jev chose ${choice} (confidence: ${confidence ?? "unknown"})`);
                return moves[index];
            }
            throw new Error("Jev returned a move outside the legal candidate list");
        } catch (error) {
            console.warn("Jev unavailable; using the first already-legal move.", error);
            return moves[0];
        }
    }
}
