import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

const DiceDisplay = (props) => {
  const diceImages = {
    dice1: require("./images/dice-1.png"),
    dice2: require("./images/dice-2.png"),
    dice3: require("./images/dice-3.png"),
    dice4: require("./images/dice-4.png"),
    dice5: require("./images/dice-5.png"),
    dice6: require("./images/dice-6.png"),
  }

  return (
    <View style={[styles.container, { opacity: props.displayDice ? 1 : 0 }]}>
      <Image
        source={diceImages[`dice${props.diceNumber}`]}
        style={styles.dice}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    elevation: 5
  },
  dice: {
    height: 100,
    width: 100
  }
});


export default DiceDisplay;
