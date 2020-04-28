import React, { useState } from 'react';
import { Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink } from 'reactstrap';
import {withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user-selectors';
import './Navbar.scss'
import { auth } from '../../firebase/firebase.utils';
import {Link }  from "react-scroll"

const isactive=(history,path)=>{
   if(history.location.pathname===path){ 
return {color:"rgb(255,189,57)",textDecoration:"underline"}
}
   else  return {color:"rgba(255,255,255,.5)"}

 }



const Header = ( history,props,currentUser ) => {

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
              <NavLink> <Link  to="contacting" duration={1000} smooth className="ml-4 nav">CONTACT</Link></NavLink>
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
            <i className="fa fa-user-circle fa-2x"></i>           
          </NavLink>
      </Navbar>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default withRouter(connect(mapStateToProps)(Header)); 