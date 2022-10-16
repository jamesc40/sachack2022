import React from "react";
import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import "./MissingPerson.css"
import MissingPersonContainer from "./MissingPersonContainer"

const MissingPerson = () => {

  //set up to use the usenavigate hook
  let navigate = useNavigate()

  //navigate to misisng person form
  const routeChange = () => {
    navigate("/missing_person_form")
  }

  return (
    <>
      <Button id="add" variant="light" onClick={routeChange}>Add Missing Person</Button>
      <MissingPersonContainer />
    </>
  )
};

export default MissingPerson;
