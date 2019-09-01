import React, { Component } from "react";
import ResultList from "../ResultList/ResultList";
import API from "../../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: []
  };

  // When this component mounts, search the Giphy API for pictures from Friends
  componentDidMount() {
    this.searchGiphy("The Big Bang Theory");
  }

  searchGiphy = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="img-container">
          <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default SearchResultContainer;
