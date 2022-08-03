import Text from '@presentation/components/Text';
import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin-top: 36px;
`;
export const Item = styled.View`
  width: 56px;
  margin-left: 24px;
`;

export const TextHour = styled(Text).attrs({
  font: 'bold',
  scale: 'button',
  align: 'center',
})`
  margin-bottom: 16px;
`;

export const TextTemp = styled(Text).attrs({
  font: 'bold',
  scale: 'h6',
  align: 'center',
})`
  margin-top: 8px;
`;

export const MiniImage = styled.Image`
  width: 100%;
  height: 30px;
  resize-mode: contain;
`;
