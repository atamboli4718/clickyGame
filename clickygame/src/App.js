import React, { Component } from "react";
import GiphyCard from "./components/GiphyCard/GiphyCard";
import Wrapper from "./components/Wrapper/Wrapper";
import Title from "./components/Title/Title";
import Instructions from "./components/Instructions/Instructions";
import WinCoutner from "./components/WinCoutner/WinCounter";
import SearchResultsContainer from "./components/SearchResultsContainer/SearchResultsContainer"

class App extends Component {
  state = {
    res: [],
  };

  render() {
    return (
      <Wrapper>
        <Title>Click Me</Title>
        
        <Instructions>The giphy's below are assigned random
            values. Click on the giphy's to add to the value below.</Instructions>

        <WinCoutner/>
        
        {this.state.res.map(friend => (
          <GiphyCard/>
        ))}
        <SearchResultsContainer />
      </Wrapper>
    );
  }
}

export default App;
