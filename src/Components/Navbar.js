import React, { useState } from 'react';
import { Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,NavbarText } from 'reactstrap';

import '../Styles/Navbar.css'



const Header = ( props ) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container-fluid bg-dark fixed-top border-bottom border-white">
      <Navbar color="dark" dark expand="md" className="container">
        <NavbarBrand href="/"  className="font-weight-bold navbrand" >Triceria</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/" className="ml-3 nav"><i className="fa fa-user fa-sm pr-2 text-white"></i>Mentor</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" className="ml-3 nav"><i className="fa fa-info fa-md pr-2 text-white"></i>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" className="ml-3 nav"><i className="fa fa-list fa-sm text-white pr-2"></i>Skills</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" className="ml-3 nav"><i className="fa fa-graduation-cap fa-sm pr-2 text-white"></i>Education</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" className="ml-3 nav"><i className="fa fa-tasks fa-sm pr-2 text-white"></i>Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" className="ml-3 nav"><i className="fa fa-address-card fa-sm pr-2 text-white"></i>Contact</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <NavLink href="/">
              {/* <img src='assets/images/download.png' height="40" width="31" alt='nav-title' style={{ borderRadius: '50%' }}/> */}
              <i class="fa fa-user-circle fa-2x"></i>           
            </NavLink>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;