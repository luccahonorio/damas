import React from 'react';

import { Container } from './styles';

import logo from '../../assets/logo.png';

export default function Menu() {
  return (
    <Container>
      <img src={logo} alt="Icon" />

      <button>PLAYER vs IA</button>
      <button>SELECIONAR TEMA</button>
    </Container>
  );
}
