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
  const [showModal, setShowModal] = useState(false);
  //create useState for showing login
  const [showLogin, setShowLogin] = useState(true);
  //create internal state called user for our component with an initial value of null
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  console.log(user);
  const getUser = () =>
    //custom route /me checks if user is currently logged in
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user)); // if user is logged in then set user informtion to userstate
      }
    });

  useEffect(() => {
    //firing getUser function to get user information and checks if user is logged in or not
    getUser();
  }, []);

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
  if (!user)
    return (
      <div>
        <NavBar
          user={user}
          setUser={setUser}
          minimal={false}
          navigate={navigate}
          showModal={showModal}
          setShowLogin={setShowLogin}
          setShowModal={setShowModal}
        />
        <Home
          user={user}
          setUser={setUser}
          navigate={navigate}
          setShowLogin={setShowLogin}
          setShowModal={setShowModal}
          showLogin={showLogin}
          showModal={showModal}
        />
      </div>
    );
  // user={user} setUser={setUser} navigate={navigate}
  return (
    <div className="App">
      <NavBar
        user={user}
        setUser={setUser}
        minimal={false}
        navigate={navigate}
        showModal={showModal}
        setShowLogin={setShowLogin}
        setShowModal={setShowModal}
      />

      {/* <GetLocation /> */}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              user={user}
              setUser={setUser}
              navigate={navigate}
              setShowLogin={setShowLogin}
              setShowModal={setShowModal}
              showLogin={showLogin}
              showModal={showModal}
            />
          }
        ></Route>
        <Route exact path="/dashboard" element={<Dashboard />}></Route>
        <Route exact path="/profile" element={<Profile />}></Route>
        <Route exact path="/missingperson" element={<MissingPerson />}></Route>
        <Route exact path="/safelocation" element={<SafeLocation />}></Route>
      </Routes>
    </div>
  );
}

export default App;
