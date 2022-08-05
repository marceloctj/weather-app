import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useGeolocation } from '@infra/geolocation';

import { Container, SafeAreaView, ScrollView } from './styles';

import Header from './components/Header';
import AdditionalData from './components/AdditionalData';
import WeatherHourlyPanel from './components/WeatherHourlyPanel';
import WeatherWeeklyPanel from './components/WeatherWeeklyPanel';

import {
  loadGeolocationData,
  loadWeatherData,
} from '@presentation/store/actions/home';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';

const HomeScreen: React.FC = () => {
  const { coord } = useGeolocation();
  const dispatch = useDispatch();

  const theme = useTheme();

  useEffect(() => {
    if (coord) {
      dispatch(loadWeatherData(coord));
      dispatch(loadGeolocationData(coord));
    }
  }, [coord, dispatch]);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.palette.primary.main}
      />
      <SafeAreaView />
      <Header />
      <ScrollView>
        <AdditionalData />
        <WeatherHourlyPanel />
        <WeatherWeeklyPanel />
      </ScrollView>
    </Container>
  );
};

export default HomeScreen;
