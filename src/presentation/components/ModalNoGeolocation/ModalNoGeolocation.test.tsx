import React from 'react';
import { themedRender, fireEvent } from '@presentation/config/test-utils';

import { ModalNoGeolocation } from './ModalNoGeolocation';
import { Linking, Platform } from 'react-native';

describe('ModalNoGeolocation Component', () => {
  beforeEach(() => {
    Platform.OS = 'ios';
  });

  it('should be defined', () => {
    expect(ModalNoGeolocation).toBeDefined();
  });

  it('should render correctly with exclusive ios content', () => {
    const { getByText, queryByText } = themedRender(<ModalNoGeolocation />);
    const textAssert =
      'O aplicativo precisa da sua localização, para fornecer os dados de previsão de tempo.';
    const textOnlyIOS = 'Vá para Configurações e depois';
    expect(queryByText(textOnlyIOS)).toBeTruthy();
    expect(getByText(textAssert)).toBeTruthy();
  });

  it('should render correctly without ios content when Platform.OS is android', () => {
    Platform.OS = 'android';
    const { getByText, queryByText } = themedRender(<ModalNoGeolocation />);
    const textAssert =
      'O aplicativo precisa da sua localização, para fornecer os dados de previsão de tempo.';
    const textOnlyIOS = 'Vá para Configurações e depois';
    expect(queryByText(textOnlyIOS)).toBeFalsy();
    expect(getByText(textAssert)).toBeTruthy();
  });

  it('should call Linking.openSettings when press on Configurações Button', () => {
    const spyOnOpenSettings = jest.spyOn(Linking, 'openSettings');
    const { getByText } = themedRender(<ModalNoGeolocation />);

    fireEvent.press(getByText('Configurações'));
    expect(spyOnOpenSettings).toHaveBeenCalled();
  });
});
