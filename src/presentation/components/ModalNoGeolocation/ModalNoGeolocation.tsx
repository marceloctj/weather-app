import React from 'react';
import { Linking, Modal, Platform } from 'react-native';
import Text from '@presentation/components/Text';

import {
  BroadcastOffIcon,
  Container,
  InstructionItem,
  Instructions,
  SettingButton,
} from './styles';

export const ModalNoGeolocation: React.FC = () => {
  const handleOpenSettings = () => {
    Linking.openSettings();
  };

  return (
    <Modal animationType="fade">
      <Container>
        <BroadcastOffIcon />
        <Text scale="h6">
          O aplicativo precisa da sua localização, para fornecer os dados de
          previsão de tempo.
        </Text>
        <Instructions>
          {Platform.OS === 'ios' && (
            <>
              <Text scale="body2" variant="secondary">
                Vá para Configurações e depois
              </Text>
              <InstructionItem>
                <Text scale="body1">Selecione Localização</Text>
              </InstructionItem>
              <InstructionItem>
                <Text scale="body1">
                  Toque em Sempre ou Enquanto usar o aplicativo
                </Text>
              </InstructionItem>
            </>
          )}
          <InstructionItem>
            <SettingButton onPress={handleOpenSettings} text="Configurações" />
          </InstructionItem>
        </Instructions>
      </Container>
    </Modal>
  );
};
