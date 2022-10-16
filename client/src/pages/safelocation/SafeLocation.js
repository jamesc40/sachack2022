import React from "react";
import Weather from "./Weather";
import News from "./News";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SafeLocation = () => {
  return (
    <div>
      <h1>Safe Location Page</h1>
      <Container>
        <Row>
        <Col>
          <Weather />
        </Col>
        
        <Col>
          <News />
        </Col>
        </Row>
      </Container>
    </div>
  )
};

export default SafeLocation;