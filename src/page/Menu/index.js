import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

import logo from '../../assets/logo.png';

export default function Menu() {
  return (
    <Container>
      <img src={logo} alt="Icon" />

      <Link to="/dashboard">PLAYER vs IA</Link>
    </Container>
  );
}
