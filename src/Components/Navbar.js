import React, { useState } from 'react';
import { Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,NavbarText } from 'reactstrap';
import {withRouter} from "react-router-dom"
import '../Styles/Navbar.css'


const isactive=(history,path)=>{
   if(history.location.pathname===path){ 
return {color:"rgb(255,189,57)"}
}
   else  return {color:"rgba(255,255,255,.5)"}

 }



const Header = ( history,props ) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="border-bottom border-white ">
      <Navbar color="dark" dark expand="md" className="container">
        <NavbarBrand href="/"  className="font-weight-bold navbrand" >Triceria</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/About" style={isactive(history,"/About")} className="ml-3 nav"><i className="fa fa-info fa-sm pr-2 text-white"></i>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Mentor" style={isactive(history,"/Mentor")} className="ml-3 nav"><i className="fa fa-user fa-sm pr-2 text-white"></i>Mentor</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Experience" style={isactive(history,"/Experience")} className="ml-3 nav"> <i className="fa fa-briefcase fa-sm pr-2 text-white"></i>Experience</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Skills" style={isactive(history,"/Skills")} className="ml-3 nav"><i className="fa fa-list fa-sm text-white pr-2"></i>Skills</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Education" style={isactive(history,"/Education")} className="ml-3 nav"><i className="fa fa-graduation-cap fa-sm pr-2 text-white"></i>Education</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Projects" style={isactive(history,"/Projects")} className="ml-3 nav"><i className="fa fa-tasks fa-sm pr-2 text-white"></i>Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Contact" style={isactive(history,"/Contact")} className="ml-3 nav"><i className="fa fa-address-card fa-sm pr-2 text-white"></i>Contact</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <NavLink href="/Profile">
              {/* <img src='assets/images/download.png' height="40" width="31" alt='nav-title' style={{ borderRadius: '50%' }}/> */}
              <i class="fa fa-user-circle fa-2x"></i>           
            </NavLink>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default withRouter(Header);