import { darken } from 'polished';

const squareColorLighter = 'rgb(212,198,159)';
const squareColorDarker = 'rgb(142,108,80)';

const pieceDarker = 'rgb(82,57,47)';
const pieceLighter = 'rgb(230,183,79)';

const squareSelected = darken(0.2, squareColorDarker);

function piece({ color }) {
  return {
    color: color === pieceDarker ? pieceDarker : pieceLighter,
    queen: false,
  };
}

function square({ id, piece, color }) {
  return {
    id,
    piece,
    color: color === squareColorDarker ? squareColorDarker : squareColorLighter,
  };
}

export const board = [
  [
    square({ id: null, piece: null, color: squareColorLighter }),
    square({
      id: 1,
      piece: piece({ color: pieceDarker }),
      color: squareColorDarker,
    }),
    square({ id: null, piece: null, color: squareColorLighter }),
    square({
      id: 2,
      piece: piece({ color: pieceDarker }),
      color: squareColorDarker,
    }),
    square({ id: null, piece: null, color: squareColorLighter }),
    square({
      id: 3,
      piece: piece({ color: pieceDarker }),
      color: squareColorDarker,
    }),
    square({ id: null, piece: null, color: squareColorLighter }),
    square({
      id: 4,
      piece: piece({ color: pieceDarker }),
      color: squareColorDarker,
    }),
    square({ id: null, piece: null, color: squareColorLighter }),
    square({
      id: 5,
      piece: piece({ color: pieceDarker }),
      color: squareColorDarker,
    }),
  ],
  [
    square({
      id: 6,
      piece: piece({ color: pieceDarker }),
      color: squareColorDarker,
    }),
    square({ id: null, piece: null, color: squareColorLighter }),
    square({
      id: 7,
      piece: piece({ color: pieceDarker }),
      color: squareColorDarker,
    }),
    square({ id: null, piece: null, color: squareColorLighter }),
    square({
      id: 8,
      piece: piece({ color: pieceDarker }),
      color: squareColorDarker,
    }),
    square({ id: null, piece: null, color: squareColorLighter }),
    square({
      id: 9,
      piece: piece({ color: pieceDarker }),
      color: squareColorDarker,
    }),
    square({ id: null, piece: null, color: squareColorLighter }),
    square({
      id: 10,
      piece: piece({ color: pieceDarker }),
      color: squareColorDarker,
    }),
    square({ id: null, piece: null, color: squareColorLighter }),
  ],
  [
    square({ id: null, piece: null, color: squareColorLighter }),
    square({
      id: 11,
      piece: piece({ color: pieceDarker }),
      color: squareColorDarker,
    }),
    square({ id: null, piece: null, color: squareColorLighter }),
    square({
      id: 12,
      piece: piece({ color: pieceDarker }),
      color: squareColorDarker,
    }),
    square({ id: null, piece: null, color: squareColorLighter }),
    square({
      id: 13,
      piece: piece({ color: pieceDarker }),
      color: squareColorDarker,
    }),
    square({ id: null, piece: null, color: squareColorLighter }),
    square({
      id: 14,
      piece: piece({ color: pieceDarker }),
      color: squareColorDarker,
    }),
    square({ id: null, piece: null, color: squareColorLighter }),
    square({
      id: 15,
      piece: piece({ color: pieceDarker }),
      color: squareColorDarker,
    }),
  ],
  [
    square({
      id: 16,
      piece: piece({ color: pieceDarker }),
      color: squareColorDarker,
    }),
    square({ id: null, piece: null, color: squareColorLighter }),
    square({
      id: 17,
      piece: piece({ color: pieceDarker }),
      color: squareColorDarker,
    }),
    square({ id: null, piece: null, color: squareColorLighter }),
    square({
      id: 18,
      piece: piece({ color: pieceDarker }),
      color: squareColorDarker,
    }),
    square({ id: null, piece: null, color: squareColorLighter }),
    square({
      id: 19,
      piece: piece({ color: pieceDarker }),
      color: squareColorDarker,
    }),
    square({ id: null, piece: null, color: squareColorLighter }),
    square({
      id: 20,
      piece: piece({ color: pieceDarker }),
      color: squareColorDarker,
    }),
    square({ id: null, piece: null, color: squareColorLighter }),
  ],
  [
    square({ id: null, piece: null, color: squareColorLighter }),
    square({
      id: 21,
      piece: null,
      color: squareColorDarker,
    }),
    square({ id: null, piece: null, color: squareColorLighter }),
    square({
      id: 22,
      piece: null,
      color: squareColorDarker,
    }),
    square({ id: null, piece: null, color: squareColorLighter }),
    square({
      id: 23,
      piece: null,
      color: squareColorDarker,
    }),
    square({ id: null, piece: null, color: squareColorLighter }),
    square({
      id: 24,
      piece: null,
      color: squareColorDarker,
    }),
    square({ id: null, piece: null, color: squareColorLighter }),
    square({
      id: 25,
      piece: null,
      color: squareColorDarker,
    }),
  ],
  [
    square({
      id: 26,
      piece: null,
      color: squareColorDarker,
    }),
    square({ id: null, piece: null, color: squareColorLighter }),
    square({
      id: 27,
      piece: null,
      color: squareColorDarker,
    }),
    square({ id: null, piece: null, color: squareColorLighter }),
    square({
      id: 28,
      piece: null,
      color: squareColorDarker,
    }),
    square({ id: null, piece: null, color: squareColorLighter }),
    square({
      id: 29,
      piece: null,
      color: squareColorDarker,
    }),
    square({ id: null, piece: null, color: squareColorLighter }),
    square({
      id: 30,
      piece: null,
      color: squareColorDarker,
    }),
    square({ id: null, piece: null, color: squareColorLighter }),
  ],
  [
    square({ id: null, piece: null, color: squareColorLighter }),
    square({
      id: 31,
      piece: piece({ color: pieceLighter }),
      color: squareColorDarker,
    }),
    square({ id: null, piece: null, color: squareColorLighter }),
    square({
      id: 32,
      piece: piece({ color: pieceLighter }),
      color: squareColorDarker,
    }),
    square({ id: null, piece: null, color: squareColorLighter }),
    square({
      id: 33,
      piece: piece({ color: pieceLighter }),
      color: squareColorDarker,
    }),
    square({ id: null, piece: null, color: squareColorLighter }),
    square({
      id: 34,
      piece: piece({ color: pieceLighter }),
      color: squareColorDarker,
    }),
    square({ id: null, piece: null, color: squareColorLighter }),
    square({
      id: 35,
      piece: piece({ color: pieceLighter }),
      color: squareColorDarker,
    }),
  ],
  [
    square({
      id: 36,
      piece: piece({ color: pieceLighter }),
      color: squareColorDarker,
    }),
    square({ id: null, piece: null, color: squareColorLighter }),
    square({
      id: 37,
      piece: piece({ color: pieceLighter }),
      color: squareColorDarker,
    }),
    square({ id: null, piece: null, color: squareColorLighter }),
    square({
      id: 38,
      piece: piece({ color: pieceLighter }),
      color: squareColorDarker,
    }),
    square({ id: null, piece: null, color: squareColorLighter }),
    square({
      id: 39,
      piece: piece({ color: pieceLighter }),
      color: squareColorDarker,
    }),
    square({ id: null, piece: null, color: squareColorLighter }),
    square({
      id: 40,
      piece: piece({ color: pieceLighter }),
      color: squareColorDarker,
    }),
    square({ id: null, piece: null, color: squareColorLighter }),
  ],
  [
    square({ id: null, piece: null, color: squareColorLighter }),
    square({
      id: 41,
      piece: piece({ color: pieceLighter }),
      color: squareColorDarker,
    }),
    square({ id: null, piece: null, color: squareColorLighter }),
    square({
      id: 42,
      piece: piece({ color: pieceLighter }),
      color: squareColorDarker,
    }),
    square({ id: null, piece: null, color: squareColorLighter }),
    square({
      id: 43,
      piece: piece({ color: pieceLighter }),
      color: squareColorDarker,
    }),
    square({ id: null, piece: null, color: squareColorLighter }),
    square({
      id: 44,
      piece: piece({ color: pieceLighter }),
      color: squareColorDarker,
    }),
    square({ id: null, piece: null, color: squareColorLighter }),
    square({
      id: 45,
      piece: piece({ color: pieceLighter }),
      color: squareColorDarker,
    }),
  ],
  [
    square({
      id: 46,
      piece: piece({ color: pieceLighter }),
      color: squareColorDarker,
    }),
    square({ id: null, piece: null, color: squareColorLighter }),
    square({
      id: 47,
      piece: piece({ color: pieceLighter }),
      color: squareColorDarker,
    }),
    square({ id: null, piece: null, color: squareColorLighter }),
    square({
      id: 48,
      piece: piece({ color: pieceLighter }),
      color: squareColorDarker,
    }),
    square({ id: null, piece: null, color: squareColorLighter }),
    square({
      id: 49,
      piece: piece({ color: pieceLighter }),
      color: squareColorDarker,
    }),
    square({ id: null, piece: null, color: squareColorLighter }),
    square({
      id: 50,
      piece: piece({ color: pieceLighter }),
      color: squareColorDarker,
    }),
    square({ id: null, piece: null, color: squareColorLighter }),
  ],
];

function getSquareInfo({ board, square }) {
  let indexSquare = null;

  board.forEach((row) =>
    row.forEach((sq) => {
      if (sq && sq.id && sq.id === square.id) {
        indexSquare = {
          row: board.indexOf(row),
          index: row.indexOf(sq),
          piece: sq.piece,
          id: sq.id,
        };
      }
    })
  );

  return indexSquare;
}

function copyBoard({ board }) {
  const newBoard = JSON.parse(JSON.stringify(board)).map((row) => {
    return row.map((sq) => {
      if (sq.squareColor !== squareColorDarker) {
        if (sq && sq.id) {
          sq.squareColor = squareColorDarker;
        }
      }
      return sq;
    });
  });
  return newBoard;
}

// mostra os movimentos possíveis da peça
export function showMovement({ board, square }) {
  const newBoard = copyBoard({ board });
  const squareInfo = getSquareInfo({ board, square });

  // se ele é rainha
  if (square.piece.queen) {
    return showMovementQueen();
  }
  // se ele é branco
  if (square.piece.color === pieceLighter) {
    return showMovementLight({ squareInfo, board: newBoard });
  }

  // se ele é preto
  return showMovementDark({ squareInfo, board: newBoard });
}

function checkEatingLight({ board, square, direction }) {
  const squareInfo = getSquareInfo({ board, square });
  if (direction === 'left') {
    if (!board[squareInfo.row - 1][squareInfo.index - 1].piece) {
      return true;
    }
  } else {
    if (!board[squareInfo.row - 1][squareInfo.index + 1].piece) {
      return true;
    }
  }
  return false;
}

function checkEatingDark({ board, square, direction }) {
  const squareInfo = getSquareInfo({ board, square });
  if (direction === 'left') {
    if (!board[squareInfo.row + 1][squareInfo.index + 1].piece) {
      return true;
    }
  } else {
    if (!board[squareInfo.row + 1][squareInfo.index - 1].piece) {
      return true;
    }
  }
  return false;
}

function showMovementLight({ board, squareInfo }) {
  // se ele tiver na posicao 0 ele nao anda mais e vira rainha
  // se for 9 só pode mover pra esquerda
  if (squareInfo.index === 9) {
    const left = board[squareInfo.row - 1][squareInfo.index - 1];
    if (left.piece && left.piece.color === pieceLighter) {
      return board;
    }
    if (left.piece && left.piece.color !== pieceLighter) {
      if (checkEatingLight({ board, square: left, direction: 'left' })) {
        const nextLeft = board[squareInfo.row - 2][squareInfo.index - 2];
        nextLeft.color = squareSelected;
        return board;
      }
    }

    left.color = squareSelected;
    return board;
  }
  // se for 0 só pode mover pra direita
  if (squareInfo.index === 0) {
    const right = board[squareInfo.row - 1][squareInfo.index + 1];
    if (right.piece && right.piece.color === pieceLighter) {
      return board;
    }
    if (right.piece && right.piece.color !== pieceLighter) {
      if (checkEatingLight({ board, square: right, direction: 'right' })) {
        const nextRight = board[squareInfo.row - 2][squareInfo.index + 2];
        nextRight.color = squareSelected;
        return board;
      }
    }

    right.color = squareSelected;
    return board;
  }
  // pode mover para os dois lados
}

function showMovementDark() {}

function showMovementQueen() {}
