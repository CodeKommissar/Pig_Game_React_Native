import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import MyText from './MyText';

PlayerCurrentScore = (props) => {
  return (
    <View style={styles.container}>
      <MyText>
        <Text style={styles.text}>
          CURRENT
        </Text>
      </MyText>
      <MyText>
        <Text style={styles.currentScore}>
          {props.currentScore}
        </Text>
      </MyText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#EB4D4D',
    padding: 20,
    elevation: 3
  },
  text: {
    fontSize: 24,
    color: 'black',
    fontFamily: 'Lato-Light'
  },
  currentScore: {
    fontSize: 36,
    color: 'white',
    fontFamily: 'Lato-Light'
  }
});

export default PlayerCurrentScore;
