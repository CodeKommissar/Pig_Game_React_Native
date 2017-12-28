import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

PlayerGlobalScore = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.globalScore}>
        {props.globalScore}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  globalScore: {
    color: '#EB4D4D',
    fontSize: 80,
    fontFamily: 'Lato-Hairline'
  }
});

export default PlayerGlobalScore;
