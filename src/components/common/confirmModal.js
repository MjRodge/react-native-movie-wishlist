import React from 'react';
import { Text, View, Modal } from 'react-native';

import { CardSection } from './cardSection';
import { Button } from './button';

const ConfirmModal = ({ children, modalVisible, onAccept, onDecline }) => {
  const { containerStyle, textStyle, cardSectionStyle } = styles;

  return (
    <Modal
      transparent
      animationType="slide"
      //required for Android
      onRequestClose={() => {}}
      visible={modalVisible}
    >
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>{children}</Text>
        </CardSection>
        <CardSection>
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = {
  cardSectionStyle: {
    justifyContent: 'center',
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 30,
  },
  containerStyle: {
    backgroundColor: 'rgba(0,0,0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
  },
};

export { ConfirmModal };
