import React from "react"
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import "./MissingPersonCard.css"


const MissingPersonCard = () => {
    return (
        <>
            <div id="container">
                <Figure id="figure">
                    <Figure.Image
                        width={300}
                        height={300}
                        alt="Missing Person"
                        src="https://dragonball.guru/wp-content/uploads/2021/01/goku-dragon-ball-guru.jpg"
                    />
                    <Figure.Caption id="caption">
                        Goku
                    </Figure.Caption>
                </Figure>
                <Table id="table" striped bordered hover>
                    <thead>
                        <tr>
                            <th colSpan={2} id="table-header">Goku</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Gender: Male</td>
                            <td>Age: 28</td>
                        </tr>
                        <tr>
                            <td>Height: 5 ft 5 in</td>
                            <td>Weight: 140 lbs</td>
                        </tr>
                        <tr>
                            <td>Eye Color: Brown</td>
                            <td>Hair Color: Brown</td>
                        </tr>
                        <tr>
                            <td colSpan={2} id="ethnicity">Ethnicity: Asian</td>
                        </tr>
                    </tbody>
                </Table>
                {/* <Card id="all-description" style={{ width: '18rem' }}>
                    <Card.Header>Goku</Card.Header>
                    <ListGroup variant="flush">
                        <div className="description-container">
                            <ListGroup.Item className="description-width">Gender: Male</ListGroup.Item>
                            <ListGroup.Item className="description-width">Age: 28</ListGroup.Item>
                        </div>
                       
                        <div className="description-container">
                            <ListGroup.Item className="description-width">Height: 5 ft 5 in</ListGroup.Item>
                            <ListGroup.Item className="description-width">Weight: 140 lbs</ListGroup.Item>
                        </div>

                        <div className="description-container">
                            <ListGroup.Item className="description-width">Eye Color: Brown</ListGroup.Item>
                            <ListGroup.Item className="description-width">Hair Color: Brown</ListGroup.Item>
                        </div>
                        
                        <ListGroup.Item id="ethnicity">Ethnicity: Brown</ListGroup.Item>
                    </ListGroup>
                </Card> */}
            </div>
           

        </>
    )
}

export default MissingPersonCard;