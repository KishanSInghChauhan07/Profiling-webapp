import React, { Component } from 'react';
import Header from './Navbar';
import Education from './Education'
import About from './About'
import Skills from './Skills'
import Experience from './Experience'

import { BrowserRouter } from 'react-router-dom';

class Main extends Component {
    render() { 
        return (
            <BrowserRouter>
             <Header/>
             <div className="container">
             <About/>
             <Education/>
             <Experience/>
             <Skills/>
             </div>
            </BrowserRouter>
          );
    }
}
 
export default Main;