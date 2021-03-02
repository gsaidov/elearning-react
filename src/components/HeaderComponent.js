import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="navbar-color" sticky="top" expand="md">
      <div className="container-fluid">
        <NavbarBrand className="mr-auto" href="/">
          <img
            src="/assets/images/logo.png"
            height="30"
            width="30"
            alt="Website Logo"
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink
                activeStyle={{
                  fontWeight: 650,
                  color: "#b400ff",
                }}
                to="/home"
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                activeStyle={{
                  fontWeight: 650,
                  color: "#b400ff",
                }}
                to="/courses"
              >
                Courses
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
