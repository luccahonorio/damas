import produce from 'immer';
import { board as defaultBoard } from '../../../logic';

const INITIAL_STATE = {
  board: defaultBoard,
};

export default function board(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@board/SHOW_MOVEMENTS':
        draft.board = action.payload.board;
        break;
      default:
    }
  });
}
