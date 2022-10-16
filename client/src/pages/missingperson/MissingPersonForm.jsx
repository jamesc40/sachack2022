import React from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const MissingPersonForm = () => {

    return (
        <Form>
            <Form.Group className="mb-3" id="name">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Full Name" />  
            </Form.Group>
            <Form.Group className="mb-3" id="age">
                <Form.Label>Age</Form.Label>
                <Form.Control type="text" placeholder="Enter Age" />  
            </Form.Group>
            <Form.Group className="mb-3" id="gender">
                <Form.Label>Gender</Form.Label>
                <Form.Select>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Not Declared</option>
                </Form.Select>
                <Form.Control type="text" placeholder="Enter Gender" />  
            </Form.Group>
            <Form.Group className="mb-3" id="eyeColor">
                <Form.Label>Eye Color</Form.Label>
                <Form.Select>
                    <option>Brown</option>
                    <option>Hazel</option>
                    <option>Blue</option>
                    <option>Green</option>
                    <option>Gray</option>
                    <option>Amber</option>
                    <option>Red</option>
                </Form.Select>
                <Form.Control type="text" placeholder="Enter Eye Color" />  
            </Form.Group>
            <Form.Group className="mb-3" id="height">
                <Form.Label>Height</Form.Label>
                <Form.Control type="text" placeholder="Enter Height" />  
            </Form.Group>
            <Form.Group className="mb-3" id="weight">
                <Form.Label>Age</Form.Label>
                <Form.Control type="text" placeholder="Enter Weight" />  
            </Form.Group>
            <Form.Group className="mb-3" id="ethnicity">
                <Form.Label>Ethnicity</Form.Label>
                <Form.Control type="text" placeholder="Enter Ethnicity" />  
            </Form.Group>
            <Form.Group className="mb-3" id="description">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" placeholder="Enter Description" />  
            </Form.Group>

        </Form>
    )
}

export default MissingPersonForm