import React from 'react';

import { Container, Item, TextHour, TextTemp, MiniImage } from './styles';

import { useAppSelector } from '@presentation/store/hooks';
import { formatToHourString } from '@presentation/utils/time';

export const WeatherHourlyPanel: React.FC = () => {
  const hourlyForecast = useAppSelector(state => state.home.weather?.hourly);

  return (
    <Container>
      {hourlyForecast &&
        hourlyForecast.map((item, index: number) => (
          <Item testID="weather-hourly-item" key={index}>
            <TextHour>{formatToHourString(item.datetime)}</TextHour>
            <MiniImage source={item.icon} />
            <TextTemp>{item.temp?.main}º</TextTemp>
          </Item>
        ))}
    </Container>
  );
};
