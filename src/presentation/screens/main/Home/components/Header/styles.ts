import styled from 'styled-components/native';
import Tag from '@presentation/components/Tag';
import Text from '@presentation/components/Text';

export const Container = styled.View`
  flex-direction: row;
  align-items: flex-end;
  margin-top: 32px;
`;

export const LeftContent = styled.View`
  flex: 1;
  align-items: flex-start;
  padding-left: 32px;
`;

export const DegressText = styled(Text).attrs({
  scale: 'h2',
  variant: 'primary',
})`
  margin-top: 12px;
`;

export const WeatherTag = styled(Tag).attrs({
  variant: 'lightGray',
})`
  margin-top: 12px;
`;

export const RightContent = styled.View`
  flex: 1;
  margin-right: -16px;
  margin-left: 16px;
`;

export const WeatherImage = styled.Image`
  width: 100%;
  height: 180px;
`;
