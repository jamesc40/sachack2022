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
import MissingPersonForm from "./pages/missingperson/MissingPersonForm";

function App() {
  const [isLoggedin, setLogin] = useState({});

  const handleLogin = (val) => setLogin(val);

  useEffect(() => {
    let loggedIn = localStorage.getItem("loggedIn");
    if (!loggedIn) return;
    handleLogin(true);
  });

  return (
    <div className="App">
      <NavBar isLoggedin={isLoggedin} handleLogin={handleLogin} />
      <div className="container">
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
          <Route
            exact
            path="/missingperson"
            element={<MissingPerson />}
          ></Route>
          <Route
            exact
            path="/missing_person_form"
            element={<MissingPersonForm />}
          ></Route>
          <Route exact path="/safelocation" element={<SafeLocation />}></Route>
          <Route
            exact
            path="/login"
            element={<Login handleLogin={handleLogin} />}
          ></Route>
          <Route
            exact
            path="/signup"
            element={<Signup handleLogin={handleLogin} />}
          ></Route>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
