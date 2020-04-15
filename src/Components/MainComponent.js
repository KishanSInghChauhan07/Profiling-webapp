import React, { Component } from 'react';
import Header from './Navbar';
import About from './About'

import { BrowserRouter } from 'react-router-dom';

class Main extends Component {
    render() { 
        return (
            <BrowserRouter>
            <div>
             <Header />
             <div className="container">
             <About/>
             </div>
             </div>
            </BrowserRouter>
          );
    }
}
 
export default Main;