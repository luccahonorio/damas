export function showMovementsAction({ board }) {
  return {
    type: '@board/SHOW_MOVEMENTS',
    payload: { board },
  };
}

export function movePiecesAction({ board }) {
  return {
    type: '@board/MOVE_PIECES',
    payload: { board },
  };
}
