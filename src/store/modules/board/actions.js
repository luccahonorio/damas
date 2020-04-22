export function handleMovePiece({ board, square }) {
  return {
    type: '@board/HANDLE_MOVE_PIECE',
    payload: { board, square },
  };
}

export function handlePrintMovements({ board, square }) {
  return {
    type: '@board/HANDLE_PRINT_MOVEMENTS',
    payload: { board, square },
  };
}

export function handlePrintMovementsSuccess({ board }) {
  return {
    type: '@board/HANDLE_PRINT_MOVEMENTS_SUCCESS',
    payload: { board },
  };
}
