import React, { useState } from 'react';
import { Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,NavbarText } from 'reactstrap';
import '../Styles/Navbar.css'

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container-fluid bg-dark">
      <Navbar color="dark" dark expand="md" className="container">
        <NavbarBrand href="/"  className="font-weight-bold navbrand" >Triceria</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/" className="ml-3 nav">Mentor</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" className="ml-3 nav">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" className="ml-3 nav">Skills</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" className="ml-3 nav">Education</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" className="ml-3 nav">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" className="ml-3 nav">Contact</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <NavLink href="/">
              <img src='assets/images/download.png' height="40" width="31" alt='nav-title' style={{ borderRadius: '50%' }}/>
            </NavLink>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;