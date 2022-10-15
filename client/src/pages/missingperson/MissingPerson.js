import React from "react";
import Button from 'react-bootstrap/Button';
import "./MissingPerson.css"
import MissingPersonContainer from "./MissingPersonContainer"

const MissingPerson = () => {
  return (
    <>
      <Button id="add" variant="light">Add Missing Person</Button>
      <MissingPersonContainer />
    </>
  )
};

export default MissingPerson;
