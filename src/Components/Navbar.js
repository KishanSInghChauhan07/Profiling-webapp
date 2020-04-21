import React, { useState } from 'react';
import { Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink } from 'reactstrap';
import {withRouter } from "react-router-dom"
import './styles/Navbar.scss'
import { auth } from '../firebase/firebase.utils';


const Header = ( {currentUser} ) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
      <div className="border-bottom border-white">
         <Navbar color="dark" dark expand="md" className="container">
          <NavbarBrand href="/"  className="font-weight-bold navbrand" >Triceria</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
          <Nav className="m-auto" navbar>
            <NavItem>
              <NavLink href="/Contact" className="ml-4 nav">CONTACT</NavLink>
            </NavItem>
            <NavItem>
              {currentUser ? (
                <NavLink className='option nav ml-4' href='/signin' onClick={() => auth.signOut()}>
                  SIGN OUT
                </NavLink>
              ) : (
                <NavLink className='option nav ml-4' href='/signin'>
                  SIGN IN
                </NavLink>
              )}
            </NavItem>
          </Nav>
            
          </Collapse>
          <NavLink href="/Profile" className="text-white">
            {/* <img src='assets/images/download.png' height="40" width="31" alt='nav-title' style={{ borderRadius: '50%' }}/> */}
            <i class="fa fa-user-circle fa-2x"></i>           
          </NavLink>
      </Navbar>
    </div>
  );
}

export default withRouter(Header);