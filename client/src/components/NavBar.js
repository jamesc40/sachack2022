import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = ({
  user,
  showModal,
  setShowLogin,
  setShowModal,
  minimal,
  setUser,
  navigate,
}) => {
  //handle click to setShowlogin to false and show modal to true
  function handleClick() {
    setShowLogin(false);
    setShowModal(true);
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        //setting user state to null to show login modal in home page
        setUser(null);
        //navite to home page which has login modal
        navigate("/");
      }
    });
  }

  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Safe Haven</Navbar.Brand>
        <Nav>
          <Nav.Link href="safelocation">Safe Locations</Nav.Link>
          <Nav.Link href="missingperson">Missing Persons</Nav.Link>
          <Nav.Link href="profile">
            <img
              alt="goku"
              src="https://dragonball.guru/wp-content/uploads/2021/01/goku-dragon-ball-guru.jpg"
              width="50px"
            />
          </Nav.Link>
          {!user && !minimal ? (
            <button
              onClick={handleClick}
              className="nav_btn"
              disabled={showModal}
            >
              Login
            </button>
          ) : (
            <button
              onClick={handleClick}
              className="nav_btn"
              disabled={showModal}
            >
              Logout
            </button>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
