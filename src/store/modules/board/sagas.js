import { takeLatest, put, all } from 'redux-saga/effects';
import {
  handlePositionPiece,
  handleAllowedPiece,
  printAllowedMovements,
} from '../../../logic/index';
import { handlePrintMovementsSuccess } from './actions';

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

  const newBoard = printAllowedMovements({ allowedMovements });
  yield put(handlePrintMovementsSuccess({ board: newBoard }));
}

export default all([
  takeLatest('@board/HANDLE_PRINT_MOVEMENTS', handlePrintMovements),
]);
