import React from 'react';
import {
  Text
} from 'react-native';

MyText = (props) => {
  return (
    <Text style={{ fontFamily: 'Lato-Hairline', fontSize: 40 }}>
      {props.children}
    </Text>
  );
}

export default MyText;