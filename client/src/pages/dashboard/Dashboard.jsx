import Button from "react-bootstrap/Button";
import GetLocation from "./GetLocation.jsx";
import { useState } from "react";
import "./dashboard.css"

const Dashboard = () => {
  const[ safe, setSafe ] = useState(true);
console.log("hell")
  const handleSafety = (val) => {
    setSafe(val);
  };

  //if (safe == undefined) return <>Loading...</>;
  return <>  {safe || safe == undefined || safe == null ? (
    <div className="button">
      <Button       variant="secondary" onClick={() => handleSafety(true)}>Safe?</Button>
      &nbsp;&nbsp;
      <Button       variant="secondary" onClick={() => handleSafety(false)}>Unsafe</Button>
    </div>
  ) : (
    <GetLocation />
  )}
   </>;
};

export default Dashboard;
