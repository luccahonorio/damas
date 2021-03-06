import { darken } from 'polished';

// cor do quadrado claro
const squareColorLighter = 'rgb(212,198,159)';

// cor do quadrado escuro
export const squareColorDarker = 'rgb(142,108,80)';

// cor da peca escura
export const pieceDarker = 'rgb(82,57,47)';
// cor da peca clara
const pieceLighter = 'rgb(230,183,79)';

// cor do quadrado selecionada
export const squareSelected = darken(0.2, squareColorDarker);

// funcao responsavel por criar uma peca
function piece({ color, queen = false, enable = true }) {
  return {
    color: color === pieceDarker ? pieceDarker : pieceLighter,
    queen,
    enable,
  };
}

// funcao respinsavel por criar um quadrado
function square({ id, piece, color }) {
  return {
    id,
    piece,
    color: color === squareColorDarker ? squareColorDarker : squareColorLighter,
  };
}

// funcao responsavel por criar um board
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

// funcao responsavel por dar informacoes (row, index, id) de um quadrado
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

// funcao que copia o tabuleiro atual e coloca as cores dos quadrados originais
function copyBoard({ board }) {
  const newBoard = JSON.parse(JSON.stringify(board)).map((row) => {
    return row.map((sq) => {
      if (sq.color === squareSelected) {
        sq.color = squareColorDarker;
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
    return showMovementQueen({ squareInfo, board: newBoard });
  }
  // se ele é branco
  if (square.piece.color === pieceLighter) {
    return showMovementLight({ squareInfo, board: newBoard });
  }

  // se ele é preto
  return showMovementDark({ squareInfo, board: newBoard });
}

// funcao responsavel por analisar se a peca clara pode comer
export function checkEatingLight({ board, square, direction }) {
  const squareInfo = getSquareInfo({ board, square });
  if (squareInfo.row - 1 === -1 || squareInfo.row + 1 === 10) {
    return false;
  }
  if (direction === 'left') {
    if (squareInfo.index === 0) {
      return false;
    }
    if (!board[squareInfo.row - 1][squareInfo.index - 1].piece) {
      return true;
    }
  } else {
    if (squareInfo.index === 9) {
      return false;
    }
    if (!board[squareInfo.row - 1][squareInfo.index + 1].piece) {
      return true;
    }
  }
  return false;
}

// funcao responsavel por analisar se a peca escura pode comer
export function checkEatingDark({ board, square, direction }) {
  const squareInfo = getSquareInfo({ board, square });
  if (squareInfo.row - 1 === -1 || squareInfo.row + 1 === 10) {
    return false;
  }
  if (direction === 'left') {
    if (squareInfo.index === 9) {
      return false;
    }
    if (!board[squareInfo.row + 1][squareInfo.index + 1].piece) {
      return true;
    }
  } else {
    if (squareInfo.index === 0) {
      return false;
    }
    if (!board[squareInfo.row + 1][squareInfo.index - 1].piece) {
      return true;
    }
  }
  return false;
}

// funcao responsavel por mostrar os movimentos da peca clara
export function showMovementLight({ board, squareInfo }) {
  // se ele tiver na posicao 0 ele nao anda mais e vira rainha
  // se for 9 só pode mover pra esquerda
  if (squareInfo.row === 0) {
    return board;
  }

  if (squareInfo.index === 9) {
    const left = board[squareInfo.row - 1][squareInfo.index - 1];
    if (left && left.piece && left.piece.color === pieceLighter) {
      return board;
    }
    if (left && left.piece && left.piece.color !== pieceLighter) {
      if (checkEatingLight({ board, square: left, direction: 'left' })) {
        const newBoard = copyBoard({ board });
        const nextLeft = newBoard[squareInfo.row - 2][squareInfo.index - 2];
        nextLeft.color = squareSelected;
        return newBoard;
      } else {
        return board;
      }
    }

    left.color = squareSelected;
    return board;
  }
  // se for 0 só pode mover pra direita
  if (squareInfo.index === 0) {
    const right = board[squareInfo.row - 1][squareInfo.index + 1];
    if (right && right.piece && right.piece.color === pieceLighter) {
      return board;
    }
    if (right && right.piece && right.piece.color !== pieceLighter) {
      if (checkEatingLight({ board, square: right, direction: 'right' })) {
        const newBoard = copyBoard({ board });
        const nextRight = newBoard[squareInfo.row - 2][squareInfo.index + 2];
        nextRight.color = squareSelected;
        return newBoard;
      } else {
        return board;
      }
    }

    right.color = squareSelected;
    return board;
  }
  // pode mover para os dois lados
  const verify = { left: true, right: true };

  // left
  const left = board[squareInfo.row - 1][squareInfo.index - 1];
  if (left && left.piece && left.piece.color === pieceLighter) {
    verify.left = false;
  }
  if (left && left.piece && left.piece.color !== pieceLighter) {
    if (checkEatingLight({ board, square: left, direction: 'left' })) {
      const newBoard = copyBoard({ board });
      const nextLeft = newBoard[squareInfo.row - 2][squareInfo.index - 2];
      nextLeft.color = squareSelected;
      return newBoard;
    } else {
      verify.left = false;
    }
  }

  // right
  const right = board[squareInfo.row - 1][squareInfo.index + 1];
  if (right && right.piece && right.piece.color === pieceLighter) {
    verify.right = false;
  }
  if (right && right.piece && right.piece.color !== pieceLighter) {
    if (checkEatingLight({ board, square: right, direction: 'right' })) {
      const newBoard = copyBoard({ board });
      const nextRight = newBoard[squareInfo.row - 2][squareInfo.index + 2];
      nextRight.color = squareSelected;
      return newBoard;
    } else {
      verify.right = false;
    }
  }

  if (verify.right) {
    right.color = squareSelected;
  }
  if (verify.left) {
    left.color = squareSelected;
  }

  return board;
}

// funcao responsavel por mostrar os movimentos da peca clara que e rainha
function showMovementLightQueen({ board, squareInfo }) {
  // se ele tiver na posicao 0 ele nao anda mais e vira rainha
  // se for 9 só pode mover pra esquerda
  if (squareInfo.row === 0) {
    return board;
  }

  if (squareInfo.index === 9) {
    const left = board[squareInfo.row - 1][squareInfo.index - 1];
    if (left && left.piece && left.piece.color === pieceDarker) {
      return board;
    }
    if (left && left.piece && left.piece.color !== pieceDarker) {
      if (checkEatingLight({ board, square: left, direction: 'left' })) {
        const newBoard = copyBoard({ board });
        const nextLeft = newBoard[squareInfo.row - 2][squareInfo.index - 2];
        nextLeft.color = squareSelected;
        return { newBoard };
      } else {
        return board;
      }
    }

    left.color = squareSelected;
    return board;
  }
  // se for 0 só pode mover pra direita
  if (squareInfo.index === 0) {
    const right = board[squareInfo.row - 1][squareInfo.index + 1];
    if (right && right.piece && right.piece.color === pieceDarker) {
      return board;
    }
    if (right && right.piece && right.piece.color !== pieceDarker) {
      if (checkEatingLight({ board, square: right, direction: 'right' })) {
        const newBoard = copyBoard({ board });
        const nextRight = newBoard[squareInfo.row - 2][squareInfo.index + 2];
        nextRight.color = squareSelected;
        return { newBoard };
      } else {
        return board;
      }
    }

    right.color = squareSelected;
    return board;
  }
  // pode mover para os dois lados
  const verify = { left: true, right: true };

  // left
  const left = board[squareInfo.row - 1][squareInfo.index - 1];
  if (left && left.piece && left.piece.color === pieceDarker) {
    verify.left = false;
  }
  if (left && left.piece && left.piece.color !== pieceDarker) {
    if (checkEatingLight({ board, square: left, direction: 'left' })) {
      const newBoard = copyBoard({ board });
      const nextLeft = newBoard[squareInfo.row - 2][squareInfo.index - 2];
      nextLeft.color = squareSelected;
      return { newBoard };
    } else {
      verify.left = false;
    }
  }

  // right
  const right = board[squareInfo.row - 1][squareInfo.index + 1];
  if (right && right.piece && right.piece.color === pieceDarker) {
    verify.right = false;
  }
  if (right && right.piece && right.piece.color !== pieceDarker) {
    if (checkEatingLight({ board, square: right, direction: 'right' })) {
      const newBoard = copyBoard({ board });
      const nextRight = newBoard[squareInfo.row - 2][squareInfo.index + 2];
      nextRight.color = squareSelected;
      return { newBoard };
    } else {
      verify.right = false;
    }
  }

  if (verify.right) {
    right.color = squareSelected;
  }
  if (verify.left) {
    left.color = squareSelected;
  }

  return board;
}

// funcao responsavel por mostrar os movimentos da peca escura
function showMovementDark({ board, squareInfo }) {
  // se ele tiver na posicao 0 ele nao anda mais e vira rainha
  // se for 9 só pode mover pra esquerda

  if (squareInfo.row === 9) {
    return board;
  }

  if (squareInfo.index === 9) {
    const right = board[squareInfo.row + 1][squareInfo.index - 1];
    if (right && right.piece && right.piece.color === pieceDarker) {
      return board;
    }
    if (right && right.piece && right.piece.color !== pieceDarker) {
      if (checkEatingDark({ board, square: right, direction: 'right' })) {
        const newBoard = copyBoard({ board });
        const nextRight = newBoard[squareInfo.row + 2][squareInfo.index - 2];
        nextRight.color = squareSelected;
        return newBoard;
      } else {
        return board;
      }
    }

    right.color = squareSelected;
    return board;
  }
  // se for 0 só pode mover pra direita
  if (squareInfo.index === 0) {
    const left = board[squareInfo.row + 1][squareInfo.index + 1];
    if (left && left.piece && left.piece.color === pieceDarker) {
      return board;
    }
    if (left && left.piece && left.piece.color !== pieceDarker) {
      if (checkEatingDark({ board, square: left, direction: 'left' })) {
        const newBoard = copyBoard({ board });
        const nextleft = newBoard[squareInfo.row + 2][squareInfo.index + 2];
        nextleft.color = squareSelected;
        return newBoard;
      } else {
        return board;
      }
    }

    left.color = squareSelected;
    return board;
  }
  // pode mover para os dois lados
  const verify = { left: true, right: true };

  // left
  const right = board[squareInfo.row + 1][squareInfo.index - 1];
  if (right && right.piece && right.piece.color === pieceDarker) {
    verify.right = false;
  }
  if (right && right.piece && right.piece.color !== pieceDarker) {
    if (checkEatingDark({ board, square: right, direction: 'right' })) {
      const newBoard = copyBoard({ board });
      const nextright = newBoard[squareInfo.row + 2][squareInfo.index - 2];
      nextright.color = squareSelected;
      return newBoard;
    } else {
      verify.right = false;
    }
  }

  // right
  const left = board[squareInfo.row + 1][squareInfo.index + 1];
  if (left.piece && left.piece.color === pieceDarker) {
    verify.left = false;
  }
  if (left.piece && left.piece.color !== pieceDarker) {
    if (checkEatingDark({ board, square: left, direction: 'left' })) {
      const newBoard = copyBoard({ board });
      const nextRight = newBoard[squareInfo.row + 2][squareInfo.index + 2];
      nextRight.color = squareSelected;
      return newBoard;
    } else {
      verify.left = false;
    }
  }

  if (verify.right) {
    right.color = squareSelected;
  }
  if (verify.left) {
    left.color = squareSelected;
  }

  return board;
}

// funcao responsavel por mostrar os movimentos da peca escura rainha
function showMovementDarkQueen({ board, squareInfo }) {
  // se ele tiver na posicao 0 ele nao anda mais e vira rainha
  // se for 9 só pode mover pra esquerda
  if (squareInfo.row === 9) {
    return board;
  }

  if (squareInfo.index === 9) {
    const right = board[squareInfo.row + 1][squareInfo.index - 1];
    if (right && right.piece && right.piece.color === pieceLighter) {
      return board;
    }
    if (right && right.piece && right.piece.color !== pieceLighter) {
      if (checkEatingDark({ board, square: right, direction: 'right' })) {
        const newBoard = copyBoard({ board });
        const nextRight = newBoard[squareInfo.row + 2][squareInfo.index - 2];
        nextRight.color = squareSelected;
        return { newBoard };
      } else {
        return board;
      }
    }

    right.color = squareSelected;
    return board;
  }
  // se for 0 só pode mover pra direita
  if (squareInfo.index === 0) {
    const left = board[squareInfo.row + 1][squareInfo.index + 1];
    if (left && left.piece && left.piece.color === pieceLighter) {
      return board;
    }
    if (left && left.piece && left.piece.color !== pieceLighter) {
      if (checkEatingDark({ board, square: left, direction: 'left' })) {
        const newBoard = copyBoard({ board });
        const nextleft = newBoard[squareInfo.row + 2][squareInfo.index + 2];
        nextleft.color = squareSelected;
        return { newBoard };
      } else {
        return board;
      }
    }

    left.color = squareSelected;
    return board;
  }
  // pode mover para os dois lados
  const verify = { left: true, right: true };

  // left
  const right = board[squareInfo.row + 1][squareInfo.index - 1];
  if (right && right.piece && right.piece.color === pieceLighter) {
    verify.right = false;
  }
  if (right && right.piece && right.piece.color !== pieceLighter) {
    if (checkEatingDark({ board, square: right, direction: 'right' })) {
      const newBoard = copyBoard({ board });
      const nextright = newBoard[squareInfo.row + 2][squareInfo.index - 2];
      nextright.color = squareSelected;
      return { newBoard };
    } else {
      verify.right = false;
    }
  }

  // right
  const left = board[squareInfo.row + 1][squareInfo.index + 1];
  if (left.piece && left.piece.color === pieceLighter) {
    verify.left = false;
  }
  if (left.piece && left.piece.color !== pieceLighter) {
    if (checkEatingDark({ board, square: left, direction: 'left' })) {
      const newBoard = copyBoard({ board });
      const nextRight = newBoard[squareInfo.row + 2][squareInfo.index + 2];
      nextRight.color = squareSelected;
      return { newBoard };
    } else {
      verify.left = false;
    }
  }

  if (verify.right) {
    right.color = squareSelected;
  }
  if (verify.left) {
    left.color = squareSelected;
  }

  return board;
}

// funao main para mostrar os movimentos da rainha
function showMovementQueen({ board, squareInfo }) {
  if (squareInfo.piece.color === pieceLighter) {
    const boardDark = showMovementDarkQueen({ board, squareInfo });
    if (!Array.isArray(boardDark)) {
      return boardDark.newBoard;
    }
    return showMovementLight({ board: boardDark, squareInfo });
  }
  const boardLight = showMovementLightQueen({ board, squareInfo });
  if (!Array.isArray(boardLight)) {
    return boardLight.newBoard;
  }
  return showMovementDark({ board: boardLight, squareInfo });
}

// funcao responsavel por analisar se a peca clara pode comer em sequencia
function checkTestLightEat({ board, square, direction }) {
  const squareInfo = getSquareInfo({ board, square });
  if (squareInfo.row - 2 <= -1 || squareInfo.row + 2 >= 10) {
    return false;
  }
  if (direction === 'left') {
    if (squareInfo.index === 0 || squareInfo.index === 1) {
      return false;
    }
    if (!board[squareInfo.row - 2][squareInfo.index - 2].piece) {
      if (board[squareInfo.row - 1][squareInfo.index - 1].piece) {
        return true;
      }
    }
  } else {
    if (squareInfo.index === 9 || squareInfo.index === 8) {
      return false;
    }
    if (!board[squareInfo.row - 2][squareInfo.index + 2].piece) {
      if (board[squareInfo.row - 1][squareInfo.index + 1].piece) {
        return true;
      }
    }
  }
  return false;
}

// funcao responsavel por analisar se peca clara quando é rainha pode comer
// em sequencia
function checkTestDarkEat({ board, square, direction }) {
  const squareInfo = getSquareInfo({ board, square });
  if (squareInfo.row - 2 <= -1 || squareInfo.row + 2 >= 10) {
    return false;
  }
  if (direction === 'left') {
    if (squareInfo.index === 9) {
      return false;
    }

    if (!board[squareInfo.row + 2][squareInfo.index + 2].piece) {
      if (board[squareInfo.row + 1][squareInfo.index + 1].piece) {
        return true;
      }
    }
  } else {
    if (squareInfo.index === 0) {
      return false;
    }
    if (!board[squareInfo.row + 2][squareInfo.index - 2].piece) {
      if (board[squareInfo.row + 1][squareInfo.index - 1].piece) {
        return true;
      }
    }
  }
  return false;
}

// funcao que move as pecas
export function movePiece({ board, square, selected }) {
  if (square.color !== squareSelected) return;
  const selectedInfo = getSquareInfo({ board, square: selected });
  const squareInfo = getSquareInfo({ board, square });
  const newBoard = copyBoard({ board });
  let eat = false;

  // add
  newBoard[squareInfo.row][squareInfo.index].piece = selected.piece;

  // check if can be a queen
  if (square && !square.piece) {
    // white
    if (squareInfo.row === 9) {
      newBoard[squareInfo.row][squareInfo.index].piece.queen = true;
    }
    // black
    if (squareInfo.row === 0) {
      newBoard[squareInfo.row][squareInfo.index].piece.queen = true;
    }
  }

  // remove
  newBoard[selectedInfo.row][selectedInfo.index].piece = null;

  // branco
  if (selectedInfo.row - squareInfo.row === 2) {
    if (squareInfo.index > selectedInfo.index) {
      //right
      newBoard[selectedInfo.row - 1][selectedInfo.index + 1].piece = null;
    } else {
      //left
      newBoard[selectedInfo.row - 1][selectedInfo.index - 1].piece = null;
    }
    if (
      checkTestLightEat({ board: newBoard, square, direction: 'right' }) ||
      checkTestLightEat({ board: newBoard, square, direction: 'left' })
    ) {
      console.log('ele pode comer meu parceiro testLightEat');
      eat = true;
    }
    // se a peça for queen tente para o dark tbm
    if (
      selected &&
      selected.piece &&
      selected.piece.queen &&
      selected.piece.color === pieceLighter
    ) {
      if (
        checkTestDarkEat({ board: newBoard, square, direction: 'right' }) ||
        checkTestDarkEat({ board: newBoard, square, direction: 'left' })
      ) {
        console.log('ele pode comer meu parceiro testDarkEat');
        eat = true;
      }
    }
  }
  // preta
  if (squareInfo.row - selectedInfo.row === 2) {
    if (selectedInfo.index > squareInfo.index) {
      //right
      newBoard[selectedInfo.row + 1][selectedInfo.index - 1].piece = null;
    } else {
      //left
      newBoard[selectedInfo.row + 1][selectedInfo.index + 1].piece = null;
    }
  }

  return { newBoard, eat };
}
