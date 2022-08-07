import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '@presentation/components/Button';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 32px;
`;

export const BroadcastOffIcon = styled(Icon).attrs({
  name: 'broadcast-off',
  size: 60,
})`
  color: ${({ theme }) => theme.palette.secondary.main};
  margin-bottom: 8px;
`;

export const Instructions = styled.View`
  margin-top: 24px;
`;

export const InstructionItem = styled.View`
  margin-top: 8px;
  align-items: flex-start;
`;

export const SettingButton = styled(Button).attrs({
  variant: 'secondary',
})`
  margin-top: 20px;
`;
