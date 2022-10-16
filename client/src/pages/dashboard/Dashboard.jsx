import Button from "react-bootstrap/Button";
import GetLocation from "./GetLocation";
import { useState } from "react";

const Dashboard = () => {
  const { safe, setSafe } = useState(true);

  //if (safe == undefined) return <>Loading...</>;
  return <> {!safe ? <Button>Safe?</Button> : <GetLocation />} </>;
};

export default Dashboard;
