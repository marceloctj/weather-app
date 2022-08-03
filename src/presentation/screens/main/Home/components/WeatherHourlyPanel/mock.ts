const makeMockedTemperature = () => {
  const temperature = Math.floor(Math.random() * (30 - 20) + 20);
  return `${temperature}°`;
};

const makeMockedHour = (index: number) => {
  let hour = new Date().getHours() + 1 + (index % 24);
  let sufix = 'AM';
  if (hour > 12) {
    sufix = 'PM';
    hour -= 12;
  }
  return `${hour.toString().padStart(2, '0')} ${sufix}`;
};

export const mockedData = Array(30)
  .fill(0)
  .map((_, index) => ({
    hour: makeMockedHour(index),
    temperature: makeMockedTemperature(),
  }));
