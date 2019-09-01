import React from "react";
import { Container, Row, Col } from "reactstrap";


function ResultList(props) {
  return (
    <Row>
      {props.results.map(result => (
        <Col xs='3' className="sizing" key={result.id}>
          <img alt={result.title} className="img-fluid" src={result.images.original_still.url} />
        </Col>
      ))}
    </Row>
  );
}

export default ResultList;
