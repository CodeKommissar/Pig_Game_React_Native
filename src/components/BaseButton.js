import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BaseButton = (props) => {
  return (
      <TouchableNativeFeedback
        disabled={!props.active}
        onPress={() => {
          props.handleOnPress()
        }}
      >
        <View style={styles.container}>
          <Icon name={props.iconName} size={30} color="#EB4D4D" />
          <Text style={styles.text}>
            {props.children}
          </Text>
        </View>
      </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center'
  },
  text: {
    fontFamily: 'Lato-Light',
    fontSize: 25,
    marginLeft: 5
  }
});

export default BaseButton;
