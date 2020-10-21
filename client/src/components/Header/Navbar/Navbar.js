import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import './Navbar.scss';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar dark expand="md" className="navbar" sticky="top">
      <NavbarBrand href="#"><NavLink exact to="/"><img src={process.env.PUBLIC_URL + '/assets/images/swiftfoodslogodcolor.png'} alt="logo" height="30" width="30"/></NavLink></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="mr-3">
              <NavLink exact to="/" activeClassName="active-link">Home</NavLink>
            </NavItem>
            <NavItem className="mr-3">
              <NavLink to="/about" activeClassName="active-link">About us</NavLink>
            </NavItem>
            <NavItem className="mr-3">
                <NavLink to="/shop" activeClassName="active-link">Shop</NavLink>
            </NavItem>
            <NavItem className="mr-3">
                <NavLink to="/contact" activeClassName="active-link">Contact</NavLink>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
