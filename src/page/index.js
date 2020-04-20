import React, { useState, useEffect } from 'react';
import { darken } from 'polished';
import { handleBorder, showMovements, handleMove } from '../logic';

import { Container, Board, Square, Piece } from './styles';

export default function Page() {
  const [board, setBoard] = useState(handleBorder());
  const [squareSelected, setSquareSelected] = useState(null);

  function printMovements(square) {
    if (!square.allowed.right && !square.allowed.left) {
      return;
    }

    // duplication to another local memory
    const newBoard = JSON.parse(JSON.stringify(handleBorder()));

    if (square.id === squareSelected) {
      setBoard(newBoard);
      setSquareSelected(null);
      return;
    }

    const { right, left } = showMovements(square);

    if (right) {
      const a = newBoard[right.row][right.square];

      a.color = darken(0.2, right.color);
      a.available = () => move(square, a);
    }

    if (left) {
      const a = newBoard[left.row][left.square];

      a.color = darken(0.2, left.color);
      a.available = () => move(square, a);
    }

    setSquareSelected(square.id);
    setBoard(newBoard);
  }

  function move(actualSquare, futureSquare) {
    handleMove(actualSquare, futureSquare);
    setBoard(handleBorder());
  }

  return (
    <Container>
      <Board>
        {board.map((row) =>
          row.map((square) => (
            <Square
              key={row.indexOf(square)}
              color={square.color}
              available={square.available}
              onClick={square.available}
            >
              {square.piece && (
                <Piece
                  onClick={() => printMovements(square)}
                  key={row.indexOf(square)}
                  color={square.piece}
                  allowed={square.allowed}
                />
              )}
            </Square>
          ))
        )}
      </Board>
    </Container>
  );
}
