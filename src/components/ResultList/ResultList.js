import React from "react";
import { Row, Col } from "reactstrap";



function ResultList(props) {
  return (
    <Row>
      
      {props.results.map(result => (
        <ResultItem key={result.id} result={result} increaseGuess={props.increaseGuess} targetNumber={props.targetNumber} losses={props.losses} wins={props.wins}/>
      ))}

    </Row>
  );
}

class ResultItem extends React.Component {
  state = {
    still: true,
    value: Math.floor(Math.random() * 12) + 1,
  };


  handleClick = () => {
    this.setState({
      still: !this.state.still,
    });
    console.log(this.state.value);
    this.props.increaseGuess(this.state.value);
  }

  render() {
    return(
      <Col xs='3' className="sizing" onClick={this.handleClick}>
        <img alt={this.props.result.title} className="img-fluid" src={this.state.still ? this.props.result.images.original_still.url : this.props.result.images.original.url} />
      </Col>
    );
  }
}

export default ResultList;
