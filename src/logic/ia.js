import {
  pieceDarker,
  squareColorDarker,
  squareSelected,
  checkEatingDark,
  checkEatingLight,
} from './index';
const eatNormalPiece = 1;
const eatQueenPiece = 1.5;
const movePiece = 0;
// const diePiece = -1;
// const dieQueenPiece = -1.5;

// voce pode comer uma peça?
// voce vai morrer?
// se não vai andar normal

// array [{id: 1, soma: 0}, {id: 2, soma: 1.5}]

// Pega as informações (row, index, piece, id) de um square (quadrado)
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

// copia o board (tabuleiro) para um novo com as cores dos squares (quadrados) originais
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

// false, object, array
// mostra os movimentos da peça clara quando ela é rainha
function showMovementLightQueen({ board, squareInfo }) {
  // se ele tiver na posicao 0 ele nao anda mais e vira rainha
  // se for 9 só pode mover pra esquerda
  if (squareInfo.row === 0) {
    return false;
  }

  if (squareInfo.index === 9) {
    const left = board[squareInfo.row - 1][squareInfo.index - 1];
    if (left && left.piece && left.piece.color === pieceDarker) {
      return false;
    }
    if (left && left.piece && left.piece.color !== pieceDarker) {
      if (checkEatingLight({ board, square: left, direction: 'left' })) {
        const newBoard = copyBoard({ board });
        const nextLeft = newBoard[squareInfo.row - 2][squareInfo.index - 2];
        return { next: nextLeft, direction: 'left' };
      } else {
        return false;
      }
    }

    return left;
  }
  // se for 0 só pode mover pra direita
  if (squareInfo.index === 0) {
    const right = board[squareInfo.row - 1][squareInfo.index + 1];
    if (right && right.piece && right.piece.color === pieceDarker) {
      return false;
    }
    if (right && right.piece && right.piece.color !== pieceDarker) {
      if (checkEatingLight({ board, square: right, direction: 'right' })) {
        const newBoard = copyBoard({ board });
        const nextRight = newBoard[squareInfo.row - 2][squareInfo.index + 2];
        return { next: nextRight, direction: 'right' };
      } else {
        return false;
      }
    }

    return right;
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
      return { next: nextLeft, direction: 'left' };
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
      return { next: nextRight, direction: 'right' };
    } else {
      verify.right = false;
    }
  }

  let result = [];
  if (verify.right) {
    result = [right];
  }
  if (verify.left) {
    result = [...result, left];
  }

  return result;
}

// mostra os movimentos da peça escura
function showMovementDark({ board, squareInfo }) {
  // se ele tiver na posicao 0 ele nao anda mais e vira rainha
  // se for 9 só pode mover pra esquerda

  if (squareInfo.row === 9) {
    return false;
  }

  if (squareInfo.index === 9) {
    const right = board[squareInfo.row + 1][squareInfo.index - 1];
    if (right && right.piece && right.piece.color === pieceDarker) {
      return false;
    }
    if (right && right.piece && right.piece.color !== pieceDarker) {
      if (checkEatingDark({ board, square: right, direction: 'right' })) {
        const newBoard = copyBoard({ board });
        const nextRight = newBoard[squareInfo.row + 2][squareInfo.index - 2];
        return { next: nextRight, direction: 'right' };
      } else {
        return false;
      }
    }

    return right;
  }
  // se for 0 só pode mover pra direita
  if (squareInfo.index === 0) {
    const left = board[squareInfo.row + 1][squareInfo.index + 1];
    if (left && left.piece && left.piece.color === pieceDarker) {
      return false;
    }
    if (left && left.piece && left.piece.color !== pieceDarker) {
      if (checkEatingDark({ board, square: left, direction: 'left' })) {
        const newBoard = copyBoard({ board });
        const nextleft = newBoard[squareInfo.row + 2][squareInfo.index + 2];
        return { next: nextleft, direction: 'left' };
      } else {
        return false;
      }
    }

    return left;
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
      return { next: nextright, direction: 'right' };
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
      return { next: nextRight, direction: 'left' };
    } else {
      verify.left = false;
    }
  }

  let result = [];
  if (verify.left) {
    result = [left];
  }
  if (verify.right) {
    result = [...result, right];
  }

  if (result.length === 0) {
    return false;
  }
  return result;
}

// funcao responsável por calcular a soma das possiblidades
function countMovementValue({ board, movements, square }) {
  let sum = movePiece;
  // voce pode comer? FEITO
  // se nao ande normal
  // Se é um array já quer dizer que não pode mover
  if (
    !Array.isArray(movements) &&
    movements &&
    movements.next &&
    movements.direction
  ) {
    // cant eat
    // check if is a queen
    const pieceInfo = getSquareInfo({ board, square: movements.next });
    const direction = movements.direction;
    const row = pieceInfo.row - 1;
    let index = null;
    if (direction === 'right') {
      index = pieceInfo.index + 1;
    } else {
      index = pieceInfo.index - 1;
    }
    if (
      board[row][index] &&
      board[row][index].piece &&
      board[row][index].piece.queen
    ) {
      // é rainha
      sum += eatQueenPiece;
    } else {
      sum += eatNormalPiece;
    }
  }

  return { movements, square, sum };
}

// funcao responsável por pegar a melhor opcão de movimento, pode pegar um:
// objeto -> quando ele pode comer, array -> quando existe as opcoes de esquerda e direita,
// false -> quando não pode mover
function checkBestOption({ board, square }) {
  const squareInfo = getSquareInfo({ board, square });
  if (square && square.piece && square.piece.queen) {
    // object -> pode comer, false -> não pode comer nada, array -> pode andar na esquerda e na direita
    let movements = showMovementLightQueen({ board, squareInfo });
    if (!Array.isArray(movements)) {
      return countMovementValue({ board, movements, square });
    }
    if (movements) {
      return countMovementValue({ board, movements, square });
    }
    const movementsDark = showMovementDark({ board, squareInfo });
    if (!movementsDark) {
      return countMovementValue({ board, movements, square });
    }
    return countMovementValue({ board, movements: movementsDark, square });
  } else {
    const movements = showMovementDark({ board, squareInfo });
    if (!movements) return;
    return countMovementValue({ board, movements, square });
  }
}

// {movements: {}|[2], square, sum}
// funcao responsavel por identificar o movimento que tem a melhor soma
// funcao também pode a arvore
function checkBestSum({ results }) {
  let sum = -10;
  let bestSquare = null;

  if (results.length === 0) {
    alert('O jogo acabou.');
  }

  results.forEach((result) => {
    if (result.sum > sum) {
      bestSquare = result;
      sum = result.sum;
    }
  });

  // se ele tem um next
  if (bestSquare && bestSquare.movements && bestSquare.movements.next) {
    return {
      selected: bestSquare.square,
      square: bestSquare.movements.next,
      sum: bestSquare.sum,
    };
  }
  // se ele tiver duas opcoes retorna sempre o da esquerda
  if (Array.isArray(bestSquare.movements)) {
    return {
      selected: bestSquare.square,
      square: bestSquare.movements[0],
      sum: bestSquare.sum,
    };
  }

  return {
    selected: bestSquare.square,
    square: bestSquare.movements,
    sum: bestSquare.sum,
  };
}

// funcao main na qual chama as demais para identificar a melhor opcao de movimentacao
// e a que cria arvore
export function handleAlphaBeta({ board }) {
  const results = [];
  board.forEach((row) =>
    row.forEach((square) => {
      if (
        square &&
        square.id &&
        square.piece &&
        square.piece.color &&
        square.piece.color === pieceDarker
      ) {
        const bestOption = checkBestOption({ board, square });
        if (bestOption) {
          results.push(bestOption);
        }
      }
    })
  );
  return checkBestSum({ results });
}
