import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, Board, Square, Piece } from './styles';
import { showMovement } from '../logic';
import { showMovementsAction } from '../store/modules/board/actions';

export default function Page() {
  const dispatch = useDispatch();
  const board = useSelector((state) => state.board.board);

  function showMovements({ square }) {
    dispatch(showMovementsAction({ board: showMovement({ board, square }) }));
  }

  return (
    <Container>
      <Board>
        {board.map((row) =>
          row.map((sq) => (
            <Square key={row.indexOf(sq)} color={sq.color}>
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
