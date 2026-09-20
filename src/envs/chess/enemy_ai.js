const SIDE_NAME = {
    black: "黑方（后手）",
    red: "红方（先手）",
};

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
        return `${name}：(${move.fromR}, ${move.fromC}) -> (${move.toR}, ${move.toC})${capture}`;
    }

    async step(board, side = "black") {
        return this.chooseMove(board, side);
    }

    async chooseMove(board, side = "black") {
        const moves = board.getAllLegalMoves(side);
        if (moves.length === 0) return null;

        const choices = Object.fromEntries(moves.map((move, index) => [
            `move_${String(index).padStart(3, "0")}`,
            this.describeMove(board, move),
        ]));
        const state = {
            game: "中国象棋",
            side_to_move: SIDE_NAME[side] || side,
            coordinate_system: "board[row][column]；row 为 0 至 9，自上而下；column 为 0 至 8，自左而右；“空”表示无棋子。",
            board: this.boardToGrid(board),
            legal_moves: choices,
        };

        try {
            const response = await fetch("/api/jev/chess-move", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                // User-entered keys are session-only and never written to disk by the app.
                body: JSON.stringify({ state, choices, apiKey: sessionStorage.getItem("jevApiKey") || undefined }),
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
