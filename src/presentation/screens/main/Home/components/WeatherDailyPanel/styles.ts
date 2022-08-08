import Text from '@presentation/components/Text';
import styled from 'styled-components/native';

export const TextDayOfWeek = styled(Text).attrs({ scale: 'body1' })`
  flex: 1;
`;

export const TextTemp = styled(Text).attrs({
  font: 'bold',
  scale: 'body1',
  align: 'right',
})``;

export const Container = styled.View`
  margin: 44px 32px 0;
`;

export const Item = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MiniImage = styled.Image`
  width: 100%;
  height: 40px;
  resize-mode: contain;
  flex: 1;
`;

export const TempContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
