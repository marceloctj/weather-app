import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';

import { useGeolocation } from '@infra/geolocation';

import { Container, SafeAreaView, ScrollView } from './styles';

import Header from './components/Header';
import AdditionalData from './components/AdditionalData';
import WeatherHourlyPanel from './components/WeatherHourlyPanel';
import WeatherDailyPanel from './components/WeatherDailyPanel';
import Loading from './components/Loading';

import ModalNoGeolocation from '@presentation/components/ModalNoGeolocation';

import { loadHomeData } from '@presentation/store/actions/home';

const HomeScreen: React.FC = () => {
  const { coord, error, reload } = useGeolocation();
  const dispatch = useDispatch();

  const theme = useTheme();

  useEffect(() => {
    if (coord) {
      dispatch(loadHomeData(coord));
    }
  }, [coord, dispatch]);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.palette.primary.main}
      />
      {error && <ModalNoGeolocation />}
      <Loading />
      <SafeAreaView />
      <Header onRefresh={reload} />
      <ScrollView>
        <AdditionalData />
        <WeatherHourlyPanel />
        <WeatherDailyPanel />
      </ScrollView>
    </Container>
  );
};

export default HomeScreen;
