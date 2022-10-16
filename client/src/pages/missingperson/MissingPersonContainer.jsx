import React, {useEffect, useState} from "react";
import MissingPersonCard from "./MissingPersonCard";

const MissingPersonContainer = () => {

    const [data,setData] = useState([])
    
    useEffect(()=> {
        fetch("/missing_person_data")
            .then(response => response.json())
            .then(data => setData(data))
    },[])

    return (
      <>
        {data.map(person => {
            return <MissingPersonCard data={person} key={person.id} />
        })}
      </>
    )
  };
  
  export default MissingPersonContainer;