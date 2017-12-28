import React from 'react';
import BaseButton from './BaseButton';

const NewGameButton = (props) => {
  return (
    <BaseButton
      iconName="ios-add-circle-outline"
      active={true}
      handleOnPress={props.handleNewGame}
    >
      NEW GAME
    </BaseButton>
  )
}

export default NewGameButton;
