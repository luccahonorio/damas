import styled from 'styled-components';
import background from '../../assets/background-menu.jpg';
import { squareSelected, pieceDarker } from '../../logic';
export const Container = styled.div`
  display: flex;
  min-height: 100%;
  background: #f5f5f5;
  background-image: url(${background});
  justify-content: center;
  align-items: center;
`;

export const Board = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  width: 70vh;
  height: 70vh;
  box-shadow: #eeee 0.3px 0.3px 0.3px;
  border: 3px solid #000;
`;

export const Square = styled.div`
  display: flex;
  background: ${(props) => (props.color ? props.color : 'black')};
  border: 1px;
  justify-content: center;
  align-items: center;
  cursor: ${(props) => (props.color === squareSelected ? 'pointer' : 'auto')};
`;

export const Piece = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 75%;
  height: 75%;
  border-radius: 50%;
  background: ${(props) => (props.color ? props.color : 'yellow')};
  -webkit-box-shadow: 10px 10px 5px -9px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px -9px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px -9px rgba(0, 0, 0, 0.75);

  cursor: ${(props) =>
    props.color === pieceDarker ? 'not-allowed' : 'pointer'};
`;
