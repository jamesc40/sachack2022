import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

const NavBar = ({ isLoggedin, handleLogin }) => {
  let nav = useNavigate();

  const handleLogout = async () => {
    await fetch("/logout", { method: "DELETE" });
    handleLogin(false);
    localStorage.clear();
    nav("/");
  };

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
          {!isLoggedin ? (
            <>
              <Nav.Link href="login">Login</Nav.Link>
              <Nav.Link href="signup">Signup</Nav.Link>
            </>
          ) : (
            <Nav.Link onClick={handleLogout}>Signout</Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
