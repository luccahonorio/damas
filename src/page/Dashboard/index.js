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
  const [keepEat, setKeepEat] = useState(false);

  function showMovements({ square }) {
    if (square.piece.color === pieceDarker) return;
    if (turn === 'black') return;

    dispatch(showMovementsAction({ board: showMovement({ board, square }) }));
    setSelected(square);
  }

  function movePieces({ square, selected }) {
    const data = movePiece({ board, square, selected });
    if (data && data.newBoard) {
      const { newBoard, eat } = data;

      dispatch(movePiecesAction({ board: newBoard ? newBoard : board }));
      setSelected(null);

      // se o branco jogou mude para o turno do preto

      if (eat) {
        setTurn('white');
      } else {
        if (selected.piece.color !== pieceDarker) {
          setTurn('black');
        }
      }

      return newBoard;
    }
  }

  function moveIA() {
    const { selected, square, sum } = handleAlphaBeta({
      board,
    });

    square.color = squareSelected;
    const newBoard = movePieces({ square, selected: selected });

    // se ele não for comer não porque testar novamente
    if (sum >= 1) {
      const { sum: sum1 } = handleAlphaBeta({
        board: newBoard,
      });
      if (sum1 >= 1) {
        setKeepEat(true);
      } else {
        setTurn('white');
      }
    } else {
      setTurn('white');
    }
  }

  useEffect(() => {
    if (!keepEat) return;

    setTimeout(moveIA, 1000);
    setKeepEat(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [board, keepEat]);

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
