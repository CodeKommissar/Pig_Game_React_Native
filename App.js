import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Player from './src/components/Player';
import MiddleSection from './src/components/MiddleSection';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player1: {
        name: "PLAYER 1",
        globalScore: 0,
        currentScore: 0,
        active: true
      },
      player2: {
        name: "PLAYER 2",
        globalScore: 0,
        currentScore: 0,
        active: false
      },
      displayDice: false,
      diceNumber: 0,
      buttonsActive: true,
      playingUntil: 100
    }

    this.handleNewGame  = this.handleNewGame.bind(this);
    this.handleRollDice = this.handleRollDice.bind(this);
    this.handleHold     = this.handleHold.bind(this);
    this.nextPlayerTurn = this.nextPlayerTurn.bind(this);
    this.checkPlayerWon = this.checkPlayerWon.bind(this);
  }

  handleNewGame() {
    this.setState({
      player1: Object.assign({}, this.state.player1, {
        name: "PLAYER 1",
        globalScore: 0,
        currentScore: 0,
        active: true
      }),
      player2: Object.assign({}, this.state.player2, {
        name: "PLAYER 2",
        globalScore: 0,
        currentScore: 0,
        active: false
      }),
      displayDice: false,
      diceNumber: 0,
      buttonsActive: true
    })
  }

  handleRollDice() {
    const randomDiceNumber = Math.floor(Math.random() * 6) + 1;
    if (randomDiceNumber === 1) {
      this.nextPlayerTurn()
    } else if (this.state.player1.active) {
      this.setState({
        diceNumber: randomDiceNumber,
        player1: Object.assign({}, this.state.player1, {
          currentScore: this.state.player1.currentScore + randomDiceNumber
        }),
        displayDice: true
      })
    } else {
      this.setState({
        diceNumber: randomDiceNumber,
        player2: Object.assign({}, this.state.player2, {
          currentScore: this.state.player2.currentScore + randomDiceNumber
        }),
        displayDice: true
      })
    }
  }

  handleHold() {
    if (this.state.player1.active) {
      this.setState({
        player1: Object.assign({}, this.state.player1, {
          globalScore: this.state.player1.globalScore + this.state.player1.currentScore
        }),
        displayDice: false
      }, () => this.checkPlayerWon());
    } else {
      this.setState({
        player2: Object.assign({}, this.state.player2, {
          globalScore: this.state.player2.globalScore + this.state.player2.currentScore
        }),
        displayDice: false
      }, () => this.checkPlayerWon());
    }
  }

  nextPlayerTurn() {
    this.setState({
      displayDice: false,
      player1: Object.assign({}, this.state.player1, {
        active: !this.state.player1.active,
        currentScore: 0
      }),
      player2: Object.assign({}, this.state.player2, {
        active: !this.state.player2.active,
        currentScore: 0
      })
    })
  }

  checkPlayerWon() {
    if (this.state.player1.globalScore >= this.state.playingUntil) {
      this.setState({
        player1: Object.assign({}, this.state.player1, {
          name: "WINNER!"
        }),
        buttonsActive: false
      })
    } else if(this.state.player2.globalScore >= this.state.playingUntil) {
      this.setState({
        player2: Object.assign({}, this.state.player2, {
          name: "WINNER!"
        }),
        buttonsActive: false
      })
    } else {
      this.nextPlayerTurn()
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Player
          playerInfo={this.state.player1}
        />
        <Player
          playerInfo={this.state.player2}
        />
        <MiddleSection
          displayDice={this.state.displayDice}
          diceNumber={this.state.diceNumber}
          buttonsActive={this.state.buttonsActive}
          handleRollDice={this.handleRollDice}
          handleHold={this.handleHold}
          handleNewGame={this.handleNewGame}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  }
});
