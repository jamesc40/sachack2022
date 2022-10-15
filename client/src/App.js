import React, { useEffect, useState } from "react";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Profile from "./pages/profile/Profile";
import MissingPerson from "./pages/missingperson/MissingPerson";
import SafeLocation from "./pages/safelocation/SafeLocation";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

// import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   getUser();
  // }, []);

  // //getting user information from our database by using useEffect and Fetching
  // const getUser = () =>
  //   //custom route /me checks if user is currently logged in
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user)); // if user is logged in then set user informtion to userstate
  //     }
  //   });

  // checks if user is not logged in then redirect to Homepage that has login modal
  if (!user) return <Home />;
  // user={user} setUser={setUser} navigate={navigate}
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/dashboard" element={<Dashboard />}></Route>
        <Route exact path="/profile" element={<Profile />}></Route>
        <Route exact path="/missingperson" element={<MissingPerson />}></Route>
        <Route exact path="/safelocation" element={<SafeLocation />}></Route>
      </Routes>
    </div>
  );
}

export default App;
