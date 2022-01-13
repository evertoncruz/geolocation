import React from 'react';
import useGeolocation from 'react-hook-geolocation';

import {
  Container,
  Title,
  Information,
  InformationItem,
  Subtitle,
  Text,
} from './styles';

const Inner = () => {
  const geolocation = useGeolocation();

  return (
    <Container>
      <Title>Utilizaçao da API</Title>
    </Container>
  );
};

export default Inner;
