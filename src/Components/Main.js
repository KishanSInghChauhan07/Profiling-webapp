import React, { Component } from 'react';
import Header from './Navbar';
import About from './About';
import Footer from './Footer';




import { BrowserRouter } from 'react-router-dom';

class Main extends Component {
    render() { 
        return (
            <BrowserRouter>
                <Header />
                <div className="container">
                    <About/>
                </div>
                <Footer />
            </BrowserRouter>
          );
    }
}
 
export default Main;