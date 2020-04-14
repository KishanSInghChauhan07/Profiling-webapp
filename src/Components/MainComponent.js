import React, { Component } from 'react';
import Example from './Navbar';
import About from './About'

import { BrowserRouter } from 'react-router-dom';

class Main extends Component {
    render() { 
        return (
            <BrowserRouter>
            <div>
             <Example/>
             <div className="container">
             <About/>
             </div>
             </div>
            </BrowserRouter>
          );
    }
}
 
export default Main;