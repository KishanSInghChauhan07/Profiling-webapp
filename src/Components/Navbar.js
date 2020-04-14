// import React, { Component } from 'react';
// import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
// import { NavLink } from 'react-router-dom';

// class Header extends Component {
//     constructor(props) {
//         super(props);
    
//         this.toggleNav = this.toggleNav.bind(this);
//         this.state = {
//           isNavOpen: false
//         };
//       }

//       toggleNav() {
//         this.setState({
//           isNavOpen: !this.state.isNavOpen
//         });
//       }

//     render() {
//         return(
//             <div>
//                 <Navbar primary expand="md">
//                     <div className="container-fluid">
//                         <NavbarToggler onClick={this.toggleNav} />
//                         <NavbarBrand className="mr-auto" href="/"><img src='assets/images/download.png' height="60" width="51" alt='nav-title' /></NavbarBrand>
//                         {/* <Collapse isOpen={this.state.isNavOpen} navbar>
//                             <Nav navbar>
//                             <NavItem>
//                                 <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
//                             </NavItem>
//                             <NavItem>
//                                 <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
//                             </NavItem>
//                             <NavItem>
//                                 <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
//                             </NavItem>
//                             <NavItem>
//                                 <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
//                             </NavItem>
//                             </Nav>
//                         </Collapse> */}
//                     </div>
//                 </Navbar>
               
//             </div>
//         );
//     }
// }


// export default Header;

import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Example = (props) => {
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
              <NavLink href="/">Mentor</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Contact</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Career Profile
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Skills
                </DropdownItem>
                <DropdownItem>
                  Projects
                </DropdownItem>
                {/* <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem> */}
              </DropdownMenu>
            </UncontrolledDropdown>
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