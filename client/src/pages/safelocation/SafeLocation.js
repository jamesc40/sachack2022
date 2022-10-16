import React from "react";
import Weather from "./weather";
import News from "./News";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from 'react-bootstrap/Accordion';
import "./SafeLocation.css"

const SafeLocation = () => {
  return (
    <div>
      <h1 className="header">Safe Location</h1>
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
      <h2 className="header">Safe Zones</h2>
      <Accordion id="accordion-container" defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Queens Technical High School</Accordion.Header>
        <Accordion.Body>
          Address: 37-02 47th Ave, Long Island City, NY 11101
        </Accordion.Body>
        <Accordion.Body>
          Phone: (718) 937-3010
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>P.S. 112 Dutch Kills</Accordion.Header>
        <Accordion.Body>
          Address: 25-05 37th Ave, Queens, NY 11101
        </Accordion.Body>
        <Accordion.Body>
          Phone: (718) 784-5250
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>P.S./I.S. 78Q</Accordion.Header>
        <Accordion.Body>
          Address: 48-09 Center Blvd, Queens, NY 11109
        </Accordion.Body>
        <Accordion.Body>
          Phone: (718) 392-5402
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
};

export default SafeLocation;
