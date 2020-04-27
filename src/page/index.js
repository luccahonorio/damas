import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  handlePrintMovements,
  handleMovePieces,
} from '../store/modules/board/actions';

import { Container, Board, Square, Piece } from './styles';

export default function Page() {
  const dispatch = useDispatch();
  const board = useSelector((state) => state.board.board);
  const selected = useSelector((state) => state.board.selected);

  function handlePieceClick({ square }) {
    dispatch(handlePrintMovements({ board, square }));
  }

  function handleMovePiece(square) {
    if (!selected.square) return;
    dispatch(handleMovePieces({ board, square, selected }));
  }

  return (
    <Container>
      <Board>
        {board.map((row) =>
          row.map((square) => (
            <Square
              key={row.indexOf(square)}
              onClick={() => handleMovePiece(square)}
              color={square.color}
            >
              {square.piece && (
                <Piece
                  onClick={() => handlePieceClick({ square })}
                  key={row.indexOf(square)}
                  color={square.piece}
                />
              )}
            </Square>
          ))
        )}
      </Board>
    </Container>
  );
}
