const makeMockedTemperature = () => {
  const temperature = Math.floor(Math.random() * (30 - 20) + 20);
  return `${temperature}°`;
};

const days = [
  'Quarta-Feira',
  'Quinta-Feira',
  'Sexta-Feira',
  'Sábado',
  'Domingo',
  'Segunda-Feira',
  'Terça-Feira',
];
export const mockedData = Array(7)
  .fill(0)
  .map((_, index) => ({
    dayOfWeek: days[index],
    temperatureMin: makeMockedTemperature(),
    temperatureMax: makeMockedTemperature(),
  }));
