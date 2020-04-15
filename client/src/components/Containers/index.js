import React from "react";
import "./style.css";
import {Container, Col, Row} from "react-bootstrap";

function Containers(props) {
  return (
    <Container fluid id="repeatContainer" >
      <Row id="repeatRow">
        <Col id="repeatCol">{props.side1}</Col>
        <Col id="repeatCol">{props.side2}</Col>
      </Row>
    </Container>

  );
}

export default Containers;
