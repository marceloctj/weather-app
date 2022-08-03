import Text from '@presentation/components/Text';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Item = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextHumidity = styled(Text).attrs({
  font: 'bold',
})`
  margin-left: 2px;
`;

export const TextWindy = styled(Text).attrs({
  font: 'bold',
})`
  margin-left: 8px;
`;
