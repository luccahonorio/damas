export function handlePrintMovements({ board, square }) {
  return {
    type: '@board/HANDLE_PRINT_MOVEMENTS',
    payload: { board, square },
  };
}

export function handlePrintMovementsSuccess({ board, selected }) {
  return {
    type: '@board/HANDLE_PRINT_MOVEMENTS_SUCCESS',
    payload: { board, selected },
  };
}

export function handleMovePieces({ board, square, selected }) {
  return {
    type: '@board/HANDLE_MOVE_PIECES',
    payload: { board, square, selected },
  };
}

export function handleMovePiecesSuccess({ board }) {
  return {
    type: '@board/HANDLE_MOVE_PIECES_SUCCESS',
    payload: { board },
  };
}
