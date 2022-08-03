import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.main};
`;

export const SafeAreaView = styled.SafeAreaView``;

export const ScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 32,
  },
})`
  margin-top: 32px;
`;
