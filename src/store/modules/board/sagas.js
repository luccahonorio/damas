import { takeLatest, put, all } from 'redux-saga/effects';
import {
  handlePositionPiece,
  handleAllowedPiece,
  printAllowedMovements,
  handleMovePiece,
} from '../../../logic/index';
import {
  handlePrintMovementsSuccess,
  handleMovePiecesSuccess,
} from './actions';

export function* handlePrintMovements({ payload }) {
  const { board, square } = payload;

  // checking witch side is available
  const allowedPositions = handlePositionPiece({ board, square });
  // checking if this side have a piece
  const allowedMovements = handleAllowedPiece({
    board,
    square,
    allowedMovements: allowedPositions,
  });

  const newBoard = printAllowedMovements({ allowedMovements, board });
  yield put(
    handlePrintMovementsSuccess({
      board: newBoard,
      selected: { square, positions: allowedMovements },
    })
  );
}

export function* handleMovePieces({ payload }) {
  const { board, square, selected } = payload;
  const right_id = selected.positions.right.id;
  const left_id = selected.positions.left.id;
  if (square.id !== right_id && square.id !== left_id) return;

  const newBoard = handleMovePiece({
    board,
    futureSquare: square,
    actualSquare: selected.square,
  });

  yield put(handleMovePiecesSuccess({ board: newBoard }));
}

export default all([
  takeLatest('@board/HANDLE_PRINT_MOVEMENTS', handlePrintMovements),
  takeLatest('@board/HANDLE_MOVE_PIECES', handleMovePieces),
]);
