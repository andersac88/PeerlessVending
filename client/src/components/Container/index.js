import React from "react";
import "./style.css";
import {Container, Col, Row} from "react-bootstrap";

function Containers(props) {
  return (
    <Container fluid id="repeatContainer">
      <Row id="repeattRow">
        <Col sm={6} id="repeatDiv">{props.side1}</Col>
        <Col sm={6} id="repeatDiv">{props.side2}</Col>
      </Row>
    </Container>

  );
}

export default Containers;
