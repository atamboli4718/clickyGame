import React from "react";
import { Container, Row, Col } from "reactstrap";


function ResultList(props) {
  return (
    <Row>
      {props.results.map(result => (
        <ResultItem key={result.id} result={result} />
      ))}
    </Row>
  );
}

class ResultItem extends React.Component {
  state = {
    counter: 0,
    still: true,
    value: Math.floor(Math.random() * 12) + 1,
  };

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1,
      still: !this.state.still,
    });
    console.log(this.state.value)
  }

  render() {
    return(
      <Col xs='3' className="sizing" onClick={this.handleClick}>
        <p>Click Counter: </p>{this.state.counter}
        <img alt={this.props.result.title} className="img-fluid" src={this.state.still ? this.props.result.images.original_still.url : this.props.result.images.original.url} />
      </Col>
    );
  }
}

export default ResultList;
