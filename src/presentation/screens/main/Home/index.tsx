import React from 'react';

import { Container, SafeAreaView, ScrollView } from './styles';

import Header from './components/Header';
import AdditionalData from './components/AdditionalData';
import WeatherHourlyPanel from './components/WeatherHourlyPanel';
import WeatherWeeklyPanel from './components/WeatherWeeklyPanel';

const HomeScreen: React.FC = () => {
  return (
    <Container>
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
