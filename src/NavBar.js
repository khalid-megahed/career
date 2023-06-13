import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import logo from "./imgs/logo.png"
import "./NavBar.css"
import Button from 'react-bootstrap/Button';
function NavBar() {
  return (
    <Navbar  expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home"><img src={logo} alt=""/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navlinks ">
            <Nav.Link href="/">Explore</Nav.Link>
          <Button>Download App</Button> 
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;