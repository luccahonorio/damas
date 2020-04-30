import styled from 'styled-components';
import teste from '../../assets/background-menu.jpg';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  background-image: url(${teste});
  background-size: cover;

  height: 100%;

  justify-content: center;
  align-items: center;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(230, 183, 79);
    height: 59px;
    width: 269px;
    padding: 8px;
    border: 0;
    border-radius: 5px;
    margin: 10px;
    font-size: 21px;
    font-weight: bold;
    color: rgb(82, 57, 47);
    transition: background 0.2s;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

    &:hover {
      background: ${darken(0.05, 'rgb(230, 183, 79)')};
    }
  }
`;
