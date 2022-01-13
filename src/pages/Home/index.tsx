import React from 'react';

import Inner from './components/Inner';
import { Container, Title } from './styles';

const Home = () => {
  return (
    <Container>
      <Title>Página para estudos do pacote react-hook-geolocation</Title>
      <Inner />
    </Container>
  );
};

export default Home;
