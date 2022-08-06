import React from "react";
import {
  Container,
  Dropdown,
  FormControl,
  Navbar,
  Nav,
  Badge,
} from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          {/* <a href="/">Shopping Card</a> */}
          <Link to="/">Shopping Card</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 200 }}
            placeholder="Search a product"
            className="m-auto"
          />
        </Navbar.Text>
        <Nav>
          <Dropdown alignLeft>
            <DropdownToggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge className="ms-2">{0}</Badge>
            </DropdownToggle>
            <DropdownMenu style={{ minWidth: 370 }}>
              <span style={{ padding: 10 }}>Card is Empty</span>
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
