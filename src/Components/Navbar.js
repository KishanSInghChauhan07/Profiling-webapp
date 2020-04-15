import React, { useState } from 'react';
import { Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,NavbarText } from 'reactstrap';


const Example = ( props ) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/" ><img src='/logo.png' height="50" width="41" alt='nav-title'/><span className="m-2">Triceria</span></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
              <NavLink href="/">About</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#about">Education</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#about">Experience</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#about">Skills</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/">Projects</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="">Achievements</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="">Contact</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/">Mentor</NavLink>
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