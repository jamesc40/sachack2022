import Button from "react-bootstrap/Button";
import GetLocation from "./GetLocation";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [safe, setSafe] = useState();

  let nav = useNavigate();

  const handleSafety = (val) => {
    setSafe(val);
    if (val) nav("/missingperson");
  };

  useEffect(() => {
    const getUser = async () => {
      let req = await fetch("/validate-user");
      if (req.ok) {
        const res = await req.json();
        handleSafety(res.isSafe);
      }
    };
    getUser();
  }, []);

  return (
    <>
      {safe || safe == undefined || safe == null ? (
        <>
          <Button onClick={() => handleSafety(true)}>Safe?</Button>
          <Button onClick={() => handleSafety(false)}>Unsafe</Button>
        </>
      ) : (
        <GetLocation />
      )}
    </>
  );
};

export default Dashboard;
