import React from 'react';
import BaseButton from './BaseButton';

const RollDiceButton = (props) => {
  return (
    <BaseButton
      iconName="ios-sync"
      active={props.active}
      handleOnPress={props.handleRollDice}
    >
      ROLL DICE
    </BaseButton>
  )
}

export default RollDiceButton;
