import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import PlayerName from './PlayerName';
import PlayerGlobalScore from './PlayerGlobalScore';
import PlayerCurrentScore from './PlayerCurrentScore';

class Player extends Component  {
  state = {
      currentScore: 0
  }

  getBackgroundColor = function(status) {
    const bgColor = status ? "#f7f7f7" : "#fff";
    return {
      backgroundColor: bgColor
    }
  }

  render() {
    const { name, globalScore, currentScore, active } = this.props.playerInfo;

    return (
      <View style={[styles.player, this.getBackgroundColor(active)]}>
        <View>
          <PlayerName
            playerName={name}
            statusActive={active}
          />
          <PlayerGlobalScore
            globalScore={globalScore}
          />
        </View>

        <PlayerCurrentScore
          currentScore={currentScore}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  player: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

export default Player;
