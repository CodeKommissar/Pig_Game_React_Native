import React from 'react';
import BaseButton from './BaseButton';

const HoldButton = (props) => {
  return (
    <BaseButton
      iconName="ios-download-outline"
      active={props.active}
      handleOnPress={props.handleHold}
    >
      HOLD
    </BaseButton>
  )
}

export default HoldButton;
