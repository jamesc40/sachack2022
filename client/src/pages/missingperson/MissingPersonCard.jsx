import React from "react"
import Figure from 'react-bootstrap/Figure';
import Table from 'react-bootstrap/Table';
import "./MissingPersonCard.css"


const MissingPersonCard = ({data}) => {
    const {name, age, gender, eyeColor, hairColor, height, weight, ethnicity, description, image} = data

    return (
        <>
            <div id="container">
                <Figure id="figure">
                    <Figure.Image
                        width={300}
                        height={300}
                        alt="Missing Person"
                        src={image}
                    />
                    <Figure.Caption id="caption">
                        {name}
                    </Figure.Caption>
                </Figure>
                <Table id="table" striped bordered hover>
                    <thead>
                        <tr>
                            <th colSpan={2} id="table-header">{name}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Gender: {gender}</td>
                            <td>Age: {age}</td>
                        </tr>
                        <tr>
                            <td>Height: {height} ft</td>
                            <td>Weight: {weight} lbs</td>
                        </tr>
                        <tr>
                            <td>Eye Color: {eyeColor}</td>
                            <td>Hair Color: {hairColor}</td>
                        </tr>
                        <tr>
                            <td colSpan={2} id="ethnicity">Ethnicity: {ethnicity}</td>
                        </tr>
                    </tbody>
                </Table>
                <Table id="description" striped bordered>
                    <thead>
                        <tr>
                            <th>
                                Description
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {description}
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default MissingPersonCard;