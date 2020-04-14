import React, { Component } from 'react';
import Example from './Navbar';

import { BrowserRouter } from 'react-router-dom';

class Main extends Component {
    render() { 
        return (
            <BrowserRouter>
            <div>
             <Example />
            </div>
            </BrowserRouter>
            
          );
    }
}
 
export default Main;