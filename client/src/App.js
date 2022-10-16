import React, { useEffect, useState } from "react";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Profile from "./pages/profile/Profile";
import MissingPerson from "./pages/missingperson/MissingPerson";
import SafeLocation from "./pages/safelocation/SafeLocation";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

function App() {
  const [user, setUser] = useState(false);

  /*useEffect(() => {*/
  /*getUser();*/
  /*}, []);*/

  /*//getting user information from our database by using useEffect and Fetching*/
  /*const getUser = async () => {*/
  /*//custom route /me checks if user is currently logged in*/
  /*let req = await fetch("/me");*/
  /*if (req.ok) {*/
  /*setUser(req.json());*/
  /*}*/
  /*};*/

  // checks if user is not logged in then redirect to Homepage that has login modal
  //if (!user) return <Home />;
  return (
    <div className="App">
      <NavBar isLoggedin={user} />
      <div className="container">
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
          <Route
            exact
            path="/missingperson"
            element={<MissingPerson />}
          ></Route>
          <Route exact path="/safelocation" element={<SafeLocation />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
