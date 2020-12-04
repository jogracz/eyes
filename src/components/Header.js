import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import bnLogo from "../images/bnLogo.svg";

const APP_TITLE = "Borring News";

const Header = () => {
  return (
    <Navbar fixed="top" role="navigation" bg="light">
      <Navbar.Brand href="#home">
        <img
          src={bnLogo}
          width="60"
          height="60"
          className="d-inline-block align-top"
        />
        <Navbar.Text>{` ${APP_TITLE}`}</Navbar.Text>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link>Puppers</Nav.Link>
        <Nav.Link>Doggos</Nav.Link>
        <Nav.Link>Pupperinos</Nav.Link>
      </Nav>

      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-dark">Search</Button>
      </Form>
    </Navbar>
  );
};

export default Header;
