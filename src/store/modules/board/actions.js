export function showMovementsAction({ board }) {
  return {
    type: '@board/SHOW_MOVEMENTS',
    payload: { board },
  };
}
