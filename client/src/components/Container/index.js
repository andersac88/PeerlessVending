import React from "react";
import "./style.css";
import {Container, Col, Row} from "react-bootstrap";

function Containers(props) {
  return (
    <Container fluid id="repeatContainer">
      <Row id="repeattRow">
        <Col sm={6} id="repeatCol"><div id="repeatDiv">{props.side1}</div></Col>
        <Col sm={6} id="repeatCol"><div id="repeatDiv">{props.side2}</div></Col>
      </Row>
    </Container>

  );
}

export default Containers;
