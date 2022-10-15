import React, { useEffect, useState } from "react";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Profile from "./pages/profile/Profile";
import MissingPerson from "./pages/missingperson/MissingPerson";
import SafeLocation from "./pages/safelocation/SafeLocation";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import GetLocation from "./components/GetLocation.jsx";

function App() {
  const [user, setUser] = useState(null);

  /*useEffect(() => {*/
  /*getUser();*/
  /*}, []);*/

  /*//getting user information from our database by using useEffect and Fetching*/
  /*const getUser = async () =>*/
  /*//custom route /me checks if user is currently logged in*/
  /*// let req = await fetch("/validate-couple");*/
  /*let req = await fetch("/me")*/
  /*if (req.ok) {*/
  /*setUser(req.json())*/
  /*}*/
  /*});*/

  // checks if user is not logged in then redirect to Homepage that has login modal
  // if (!user) return <Home />;
  // user={user} setUser={setUser} navigate={navigate}
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <GetLocation />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
          <Route
            exact
            path="/missingperson"
            element={<MissingPerson />}
          ></Route>
          <Route exact path="/safelocation" element={<SafeLocation />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
