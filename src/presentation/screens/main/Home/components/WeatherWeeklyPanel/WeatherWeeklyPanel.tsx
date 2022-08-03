import React from 'react';

import { Container, Item, TextDayOfWeek, TextTemp, MiniImage } from './styles';

import { mockedData } from './mock';
import Text from '@presentation/components/Text';

export const WeatherWeeklyPanel: React.FC = () => {
  const imgSource = require('@assets/images/icons/night.png');
  return (
    <Container>
      {mockedData.map((item, index) => (
        <Item key={index}>
          <TextDayOfWeek>{item.dayOfWeek}</TextDayOfWeek>
          <MiniImage source={imgSource} />
          <TextTemp>
            {item.temperatureMax}{' '}
            <Text variant="secondary">{item.temperatureMin}</Text>
          </TextTemp>
        </Item>
      ))}
    </Container>
  );
};
