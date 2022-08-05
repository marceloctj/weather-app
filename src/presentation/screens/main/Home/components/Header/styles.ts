import styled from 'styled-components/native';
import Tag from '@presentation/components/Tag';
import Text from '@presentation/components/Text';

export const Container = styled.View`
  flex-direction: row;
  align-items: flex-end;
  padding: 16px 0 32px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  min-height: 200px;
`;

export const LeftContent = styled.View`
  flex: 1;
  align-items: flex-start;
  padding-left: 32px;
`;

export const DegressText = styled(Text).attrs({
  scale: 'h2',
  variant: 'white',
})`
  margin-top: 16px;
`;

export const WeatherTag = styled(Tag).attrs({
  variant: 'lightGray',
})`
  margin-top: 16px;
`;

export const RightContent = styled.View`
  flex: 1;
  margin-left: 16px;
`;

export const WeatherImage = styled.Image`
  width: 100%;
  height: 180px;
`;
