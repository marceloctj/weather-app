import Text from '@presentation/components/Text';
import styled from 'styled-components/native';

export const TextDayOfWeek = styled(Text).attrs({ scale: 'body1' })`
  flex: 1;
`;

export const TextTemp = styled(Text).attrs({
  font: 'bold',
  scale: 'body1',
  align: 'right',
})`
  flex: 1;
`;

export const Container = styled.View`
  margin: 44px 32px 0;
`;

export const Item = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const MiniImage = styled.Image`
  width: 100%;
  height: 30px;
  resize-mode: contain;
  flex: 1;
`;
