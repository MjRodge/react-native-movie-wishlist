import React from 'react';
import { TextInput, View, Text } from 'react-native';

const TextField = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
}) => {
  const {
    textFieldContainerStyle,
    textFieldInputStyle,
    textFieldLabelStyle,
  } = styles;
  return (
    <View style={textFieldContainerStyle}>
      <Text style={textFieldLabelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        placeholder={placeholder}
        style={textFieldInputStyle}
        value={value}
        onChangeText={onChangeText}
        //fixes issues on android
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

const styles = {
  textFieldInputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
    //fixes issues on android
    paddingVertical: 0,
  },
  textFieldLabelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  textFieldContainerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
};

export { TextField };
