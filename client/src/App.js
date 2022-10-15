import React, { useEffect, useState } from "react";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Profile from "./pages/profile/Profile";
import MissingPerson from "./pages/missingperson/MissingPerson";
import SafeLocation from "./pages/safelocation/SafeLocation";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
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
