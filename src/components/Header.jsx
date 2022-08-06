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
import { useCardCustomContext } from "../context/CardContextProvider";

const Header = () => {
  const { state, dispatch } = useCardCustomContext();
  // console.log(state);
  const { products, cart } = state;
  // console.log(cart);
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          {/* <a href="/">Shopping Card</a> */}
          <Link to="/">Shopping Card</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="Search a product"
            className="m-auto"
          />
        </Navbar.Text>
        <Nav>
          <Dropdown>
            <DropdownToggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge className="ms-2">{cart.length}</Badge>
            </DropdownToggle>
            <DropdownMenu style={{ minWidth: 370 }} align="end">
              <span style={{ padding: 10 }}>Cart is Empty</span>
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
