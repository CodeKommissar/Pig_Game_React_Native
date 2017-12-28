import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import NewGameButton from './NewGameButton';
import RollDiceButton from './RollDiceButton';
import HoldButton from './HoldButton';
import Dice from './Dice';

const MiddleSection = (props) => {
  return (
    <View style={styles.container}>
      <NewGameButton handleNewGame={props.handleNewGame} />

      <Dice
        displayDice={props.displayDice}
        diceNumber={props.diceNumber}
      />

      <View style={{ alignItems: 'center' }}>
        <RollDiceButton
          active={props.buttonsActive}
          handleRollDice={props.handleRollDice}
        />
        <HoldButton
          active={props.buttonsActive}
          handleHold={props.handleHold}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

export default MiddleSection;
