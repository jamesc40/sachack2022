import React, { useState } from "react";
import AuthModal from "../../components/AuthModal";
import NavBar from "../../components/NavBar";
import "./home.css";
const Home = () => {
  const user = false;
  //create useState for showing login modal
  const [showModal, setShowModal] = useState(false);
  //create useState for showing login
  const [showLogin, setShowLogin] = useState(true);
  // handling logout which clears user sessions in backend

  // handling logout which clears user sessions in backend
  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        //setting user state to null to show login modal in home page
        // setUser(null);
        //navite to home page which has login modal
        // navigate("/");
        console.log(r.ok);
      }
    });
  }

  //handling creating account which sets showModal and showLogin to true
  function handleClick() {
    setShowModal(true);
    setShowLogin(true);
  }

  return (
    <>
      <NavBar />

      <div className="home">
        <h1 className="primary_title">Do you need help?</h1>
        <button
          className="primary_button"
          onClick={user ? handleLogout : handleClick} //if user exists then let onClick be handle logout if not handleclick
        >
          {user ? "Singout" : "Create Account"}
        </button>
        {showModal && (
          <AuthModal
            showLogin={showLogin}
            setShowLogin={setShowLogin}
            setShowModal={setShowModal}
          />
        )}
      </div>
    </>
  );
};

export default Home;
