import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaCrown } from 'react-icons/fa';

import { handleAlphaBeta } from '../../logic/ia';
import { Container, Board, Square, Piece } from './styles';
import {
  showMovement,
  movePiece,
  squareSelected,
  pieceDarker,
} from '../../logic';
import {
  showMovementsAction,
  movePiecesAction,
} from '../../store/modules/board/actions';

export default function Page() {
  const dispatch = useDispatch();
  const board = useSelector((state) => state.board.board);
  const [selected, setSelected] = useState(null);
  const [turn, setTurn] = useState('white');

  function showMovements({ square }) {
    if (square.piece.color === pieceDarker) return;
    if (turn === 'black') return;
    dispatch(showMovementsAction({ board: showMovement({ board, square }) }));
    setSelected(square);
  }

  function movePieces({ square, selected }) {
    const newBoard = movePiece({ board, square, selected });
    if (newBoard) {
      dispatch(movePiecesAction({ board: newBoard ? newBoard : board }));
      setSelected(null);
      if (turn === 'white') {
        setTurn('black');
      } else {
        setTurn('white');
      }
    }
  }

  function moveIA() {
    const { selected, square } = handleAlphaBeta({ board });
    square.color = squareSelected;
    movePieces({ square, selected: selected });
  }

  useEffect(() => {
    if (turn === 'black') {
      setTimeout(moveIA, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [turn]);

  return (
    <Container>
      <Board>
        {board.map((row) =>
          row.map((sq) => (
            <Square
              key={row.indexOf(sq)}
              color={sq.color}
              onClick={() => movePieces({ square: sq, selected })}
            >
              {sq.piece && (
                <Piece
                  key={row.indexOf(sq)}
                  color={sq.piece.color}
                  onClick={() => showMovements({ square: sq })}
                >
                  {sq.piece.queen && <FaCrown size={20} />}
                </Piece>
              )}
            </Square>
          ))
        )}
      </Board>
    </Container>
  );
}
