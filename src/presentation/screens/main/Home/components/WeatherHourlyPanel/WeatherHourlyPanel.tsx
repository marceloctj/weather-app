import React from 'react';

import { Container, Item, TextHour, TextTemp, MiniImage } from './styles';

import { mockedData } from './mock';

export const WeatherHourlyPanel: React.FC = () => {
  const imgSource = require('@assets/images/icons/night.png');
  return (
    <Container>
      {mockedData.map((item: any, index: number) => (
        <Item key={index}>
          <TextHour>{item.hour}</TextHour>
          <MiniImage source={imgSource} />
          <TextTemp>{item.temperature}</TextTemp>
        </Item>
      ))}
    </Container>
  );
};
