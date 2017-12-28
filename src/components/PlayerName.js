import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import MyText from './MyText';

PlayerName = (props) => {
  return (
    <View style={styles.container}>
      <MyText>
        <Text style={{ fontFamily: props.statusActive ? 'Lato-Regular' : 'Lato-Light' }}>
          {props.playerName}
        </Text>
      </MyText>
      {
        // If the player is active, display the red bullet at the right of
        // the player name
        props.statusActive && (
          <View>
            <Text style={styles.activeBullet}>
              {'\u2022'}
            </Text>
          </View>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'Lato-Light',
  },
  activeBullet: {
    fontSize: 47,
    color: '#EB4D4D'
  }
});

export default PlayerName;
