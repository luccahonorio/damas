import produce from 'immer';
import { board as boardDefault } from '../../../logic/index';

const INITIAL_STATE = {
  board: boardDefault,
  selected: { square: null, positions: {} },
};

export default function board(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@board/HANDLE_PRINT_MOVEMENTS_SUCCESS': {
        draft.board = Object.values(action.payload.board);
        draft.selected = action.payload.selected;
        break;
      }
      default:
    }
  });
}
