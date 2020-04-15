import React, { Component } from 'react';
import Header from './Navbar';
import About from './About';



import { BrowserRouter } from 'react-router-dom';

class Main extends Component {
    render() { 
        return (
            <BrowserRouter>
                <Header />
                <div className="container pb-5">
                    <About/>
                    
                </div>
            </BrowserRouter>
          );
    }
}
 
export default Main;