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
      <Title>Container com informações de localização</Title>
      {!geolocation.error ? (
        <Information>
          <InformationItem>
            <Subtitle>Latitude:</Subtitle> <Text>{geolocation.latitude}</Text>
          </InformationItem>
          <InformationItem>
            <Subtitle>Longitude:</Subtitle> <Text>{geolocation.longitude}</Text>
          </InformationItem>
          <InformationItem>
            <Subtitle>Location accuracy:</Subtitle>{' '}
            <Text>{geolocation.accuracy}</Text>
          </InformationItem>
          <InformationItem>
            <Subtitle>Altitude:</Subtitle> <Text>{geolocation.altitude}</Text>
          </InformationItem>
          <InformationItem>
            <Subtitle>Altitude accuracy:</Subtitle>{' '}
            <Text>{geolocation.altitudeAccuracy}</Text>
          </InformationItem>
          <InformationItem>
            <Subtitle>Heading:</Subtitle> <Text>{geolocation.heading}</Text>
          </InformationItem>
          <InformationItem>
            <Subtitle>Speed:</Subtitle> <Text>{geolocation.speed}</Text>
          </InformationItem>
          <InformationItem>
            <Subtitle>Timestamp:</Subtitle> <Text>{geolocation.timestamp}</Text>
          </InformationItem>
        </Information>
      ) : (
        <p>No geolocation, sorry.</p>
      )}
    </Container>
  );
};

export default Inner;
