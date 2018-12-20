//import libraries
import React from 'react';
import { Text, View } from 'react-native';

//construct component
const Header = props => {
  //destructuring styles object for use
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

//component styling
const styles = {
  viewStyle: {
    backgroundColor: 'rgb(60, 200, 133)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 75,
    paddingTop: 35,
    shadowColor: '#000',
    shadowOffset: { height: 20, width: 0 },
    shadowOpacity: 0.9,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: '600',
  },
};

//export component for app
export { Header };
