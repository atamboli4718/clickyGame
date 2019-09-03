import React, { Component } from "react";
import Wrapper from "./components/Wrapper/Wrapper";
import Title from "./components/Title/Title";
import Instructions from "./components/Instructions/Instructions";
import WinCoutner from "./components/WinCoutner/WinCounter";
import SearchResultsContainer from "./components/SearchResultsContainer/SearchResultsContainer"

class App extends Component {

  state = {
    res: [],
    guess: 0,
    targetNumber: Math.floor(Math.random() * 104) + 50,
    wins: 0,
    losses: 0
  };

  increaseGuess = (clickedGiphVal) => {
    let newTotal = this.state.guess + clickedGiphVal;
    this.setState({guess: newTotal});
    if (newTotal === this.state.targetNumber){
      alert("You won! Great job");
      this.setState({wins: this.state.wins + 1, guess: 0, targetNumber: (Math.floor(Math.random() * 104) + 50)});
    } else if (newTotal > this.state.targetNumber) {
      alert("You lost!")
      this.setState({losses: this.state.losses + 1, guess: 0, targetNumber: (Math.floor(Math.random() * 104) + 50)});
    }
  };

  render() {
    return (
      <Wrapper>
        <Title>Click Me</Title>
        
        <Instructions>The giphy's below are assigned random
            values. Click on the giphy's to add to the value below.</Instructions>

        <WinCoutner guess={this.state.guess} targetNumber={this.state.targetNumber} losses={this.state.losses} wins={this.state.wins}/>

        <SearchResultsContainer increaseGuess={this.increaseGuess} />
      </Wrapper>
    );
  }
}

export default App;
