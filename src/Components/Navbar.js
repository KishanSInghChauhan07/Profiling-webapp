import React, { useState } from 'react';
import { Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink } from 'reactstrap';
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
      <div className="border-bottom border-white fixed-top">
         <Navbar color="dark" dark expand="md" className="container">
          <NavbarBrand href="/"  className="font-weight-bold navbrand" >Triceria</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
          <Nav className="m-auto" navbar>
            <NavItem>
              <NavLink href="/Contact" style={isactive(history,"/Contact")} className="ml-4 nav">CONTACT</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Contact" style={isactive(history,"/Contact")} className="ml-4 nav">SIGNIN</NavLink>
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