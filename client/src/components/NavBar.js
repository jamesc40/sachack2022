import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import logo from "../images/SafeLogo.png";
import "./navbar.css";
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
        <Nav.Link
          className="logo_container"
          href="/"
          style={{ textDecoration: "none" }}
        >
          <img className="logo" src={logo} alt="logo" />
        </Nav.Link>

        <Nav className="items">
          <Nav.Link style={{ color: "black" }} id="item" href="safelocation">
            Safe Locations
          </Nav.Link>
          <Nav.Link style={{ color: "black" }} id="item" href="missingperson">
            Missing Persons
          </Nav.Link>
          {/* <Nav.Link id="item" href="profile">
            <img
              className="avatar"
              alt="goku"
              src="https://dragonball.guru/wp-content/uploads/2021/01/goku-dragon-ball-guru.jpg"
              width="50px"
            />
          </Nav.Link> */}
          {!user && !minimal ? (
            <Button
              onClick={handleClick}
              className="nav_btn"
              // disabled={showModal}
              variant="secondary"
              size="sm"
            >
              Login
            </Button>
          ) : (
            <Button
              onClick={handleClick}
              className="nav_btn"
              // disabled={showModal}
              variant="secondary"
              size="sm"
            >
              Logout
            </Button>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
