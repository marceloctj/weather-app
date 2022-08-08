import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #0009;
  justify-content: center;
`;

export const ActivityIndicator = styled.ActivityIndicator.attrs(
  ({ theme }) => ({
    color: theme.palette.white.main,
  }),
)`
  margin-top: 16px;
`;
