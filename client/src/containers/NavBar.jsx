import React from "react";
import { useSelector } from "react-redux";
import { Navbar, Nav, Badge } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { BiCart } from "react-icons/bi";

function NavBar() {
  const { cartItems } = useSelector((state) => state.cart.cartItems);
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
              <BiCart size={24} /> Cart{" "}
              <Badge color="info">{cartItems.length}</Badge>
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
