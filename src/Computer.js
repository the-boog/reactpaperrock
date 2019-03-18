import React from 'react';
import { AST_Let } from 'terser';
import {Button} from 'semantic-ui-react';


class Computer extends React.Component {
  state = {showCompPick: false, compPick: "", results: "", wins: 0, losses: 0,}

  

  compPaper = () => {
    if (this.props.playerChoice === "Rock") {
      this.setState({results: "You Lose"})
      this.setState({losses: this.state.losses + 1})
    }
    else if (this.props.playerChoice === "Paper"){
      this.setState({results: "You Tie"})
  
    }
    else if (this.props.playerChoice === "Scissors")
    this.setState({results: "You Win"})
    this.setState({wins: this.state.wins + 1})
    
  }

  compRock = () => {
    if (this.props.playerChoice === "Scissors") {
      this.setState({results: "You Lose"})
      this.setState({losses: this.state.losses + 1})
    }
    else if (this.props.playerChoice === "Paper") {
      this.setState({results: "You Win"})
      this.setState({wins: this.state.wins + 1})
    }
    else if (this.props.playerChoice === "Scissors")
    this.setState({results: "You Tie"})
  }
    
  compScissors = () => {
    if (this.props.playerChoice === "Rock") {
      this.setState({results: "You Win"})
      this.setState({wins: this.state.wins + 1})
    }
    else if (this.props.playerChoice === "Paper") {
      this.setState({results: "You Lose"})
      this.setState({losses: this.state.losses + 1})
    }
    else if (this.props.playerChoice === "Scissors")
    this.setState({results: "You Tie"})
  }
  
    
  playGame = () => {
    
    switch(this.state.compPick) {
      case "Paper":
        this.compPaper()
        break;
      case "Rock":
        this.compRock()
        break;
      case "Scissors":
        this.compScissors()
        break;
      }
    }

  getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  computerChoice = () => {
    const compChoices = ["Paper", "Rock", "Scissors"]
    let i = this.getRandomInt(3)
    let gameTime = compChoices[i]
    this.setState({compPick: gameTime})
    this.setState({showcompPick: !this.state.showCompPick}, () => {this.playGame()})
  }

  

  render () {
    return (
      <div>
        <Button size="massive" color="red" onClick={() => this.computerChoice()}>Fight</Button>
        <h1>The computer chose {this.state.compPick}</h1>
        <h1>{this.state.results}</h1>
        <h2>wins = {this.state.wins}</h2>
        <h2>losses = {this.state.losses}</h2>

      </div>
    )
  }
}

export default Computer;

