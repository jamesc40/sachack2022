import React, { useState } from "react";
import AuthModal from "../../components/AuthModal";
import NavBar from "../../components/NavBar";
import "./home.css";
const Home = ({
  user,
  setUser,
  navigate,
  showLogin,
  showModal,
  setShowModal,
  setShowLogin,
}) => {
  //create useState for showing login modal

  // handling logout which clears user sessions in backend

  // handling logout which clears user sessions in backend
  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        //setting user state to null to show login modal in home page
        setUser(null);
        //navite to home page which has login modal
        navigate("/");
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
            setShowModal={setShowModal}
            setUser={setUser}
            setShowLogin={setShowLogin}
            navigate={navigate}
            showLogin={showLogin}
          />
        )}
      </div>
    </>
  );
};

export default Home;
