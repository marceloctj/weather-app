import Text from '@presentation/components/Text';
import { useAppSelector } from '@presentation/store/hooks';
import React from 'react';
import { Modal } from 'react-native';

import { Container, ActivityIndicator } from './styles';

export const Loading: React.FC = () => {
  const loading = useAppSelector(state => state.home.loading);
  return (
    <Modal transparent={true} animationType="fade" visible={loading}>
      <Container>
        <Text variant="white" scale="h6" align="center">
          Obtendo informações
        </Text>
        <ActivityIndicator size="large" />
      </Container>
    </Modal>
  );
};
