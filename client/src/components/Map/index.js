import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import {Container, Col, Row} from "react-bootstrap";

const key = process.env.REACT_APP_GOOGLE_MAPS_KEY;

const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 41.6411,
      lng: -88.4473
    },
    zoom: 7
  };
 
  render() {
    return (    <Container fluid id="repeatContainer" >
    <Row id="repeatRow">
      <Col id="repeatCol">{this.props.side1}</Col>
      <Col id="repeatCol" >
      <div style={{ marginRight: "auto", marginLeft: "auto", height: '250px', width: `250px` }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: key }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={41.6411}
            lng={-88.4473}
            text="Yorkville"
          />
        </GoogleMapReact>
      </div>
      </Col>
    </Row>
  </Container>
    );
  }
}
 
export default SimpleMap;