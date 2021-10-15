import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { BiCart } from "react-icons/bi";

function NavBar() {
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="shadow-lg p-3 mb-5 bg-white rounded"
    >
      <LinkContainer to="/">
        <Navbar.Brand className="mr-auto">PIZZA DELVIERY</Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto ml-auto">
          <LinkContainer to="/login">
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/cart">
            <Nav.Link>
              <BiCart size={24} /> Cart
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
