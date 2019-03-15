import React from 'react';
import Computer from './Computer'
import Rock from './rock.png';
import Paper from './paper.png';
import Scissors from './scissors.png';

class Player extends React.Component {
  state = {showPlayerPick: false, playerPick: "Welcome"}

playerChoiceRock = () => {
  this.setState({playerPick: "Rock"})
  this.setState({showPlayerPick: !this.state.showPlayerPick})
}
 
playerChoicePaper = () => {
  this.setState({playerPick: "Paper"})
  this.setState({showPlayerPick: !this.state.showPlayerPick})
}

playerChoiceScissors = () => {
  this.setState({playerPick: "Scissors"})
  this.setState({showPlayerPick: !this.state.showPlayerPick})
}

  render () {
    return (
      <div>
        <button onClick={() => this.playerChoiceRock()}>
          <img src={Rock} />
        </button>
        <button onClick={() => this.playerChoicePaper()}>
          <img src={Paper} />
        </button>
        <button onClick={() => this.playerChoiceScissors()}>
          <img src={Scissors} />
          </button>
        <h1>{this.state.playerPick}</h1>
        <Computer playerChoice= {this.state.playerPick} />
      </div>
    )
  }
}

export default Player;

