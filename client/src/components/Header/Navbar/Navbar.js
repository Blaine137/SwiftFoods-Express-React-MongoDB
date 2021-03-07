import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import './Navbar.scss';


const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md" className="navbar w-75 ml-auto mr-auto pl-0 pr-0" sticky="top">
        <NavbarToggler onClick={toggle} className="ml-auto" />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="mr-3 mb-2 my-md-auto">
              <NavLink exact to="/" activeClassName="active-link">Home</NavLink>
            </NavItem>
            <NavItem className="mr-3 mt-2 mb-2 my-md-auto">
              <NavLink to="/order" activeClassName="active-link">Order</NavLink>
            </NavItem>
            <NavItem className="mr-3 mt-2 mb-2 my-md-auto">
                <NavLink to="/contact" activeClassName="active-link">Contact</NavLink>
            </NavItem>
            <NavItem className="mr-3 mt-2 mb-2 my-md-auto">
              <NavLink to="/cart">
                <FontAwesomeIcon icon={faShoppingCart}/>
              </NavLink>
            </NavItem>
            <Button className="btn-secondary loginBtn h-60 w-25 w-md-auto" 
            onClick={() => {
              props.loggedIn ? props.toggleLogin() : props.toggleModal()

              if(props.loggedIn){
                props.toggleLogin();
                props.logout();
                // props.toggleModal();
              }else{
                // props.loginUser();
                props.toggleModal();
              }
            }}>
              {props.loggedIn ? "Logout" : "Login"}
            </Button>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
