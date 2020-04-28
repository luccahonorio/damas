import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, Board, Square, Piece } from './styles';
import { showMovement, movePiece } from '../logic';
import {
  showMovementsAction,
  movePiecesAction,
} from '../store/modules/board/actions';

export default function Page() {
  const dispatch = useDispatch();
  const board = useSelector((state) => state.board.board);
  const [selected, setSelected] = useState(null);

  function showMovements({ square }) {
    dispatch(showMovementsAction({ board: showMovement({ board, square }) }));
    setSelected(square);
  }

  function movePieces({ square }) {
    const newBoard = movePiece({ board, square, selected });
    if (newBoard) {
      dispatch(movePiecesAction({ board: newBoard ? newBoard : board }));
      setSelected(null);
    }
  }

  return (
    <Container>
      <Board>
        {board.map((row) =>
          row.map((sq) => (
            <Square
              key={row.indexOf(sq)}
              color={sq.color}
              onClick={() => movePieces({ square: sq })}
            >
              {sq.piece && (
                <Piece
                  key={row.indexOf(sq)}
                  color={sq.piece.color}
                  onClick={() => showMovements({ square: sq })}
                />
              )}
            </Square>
          ))
        )}
      </Board>
    </Container>
  );
}
