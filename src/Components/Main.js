import React, { Component } from 'react';
import Header from './Navbar';
import About from './About';
import Footer from './Footer';
// import About from './About';
// import mentor from './Mentor';
import Contact from './Contact';

import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';






class Main extends Component {
    render() { 
        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path='/about' component={About} />
                    {/* <Route exact path='/mentor' component={mentor} /> */}
                    <Route exact path='/contactus' component={Contact} />} />

                    <Redirect to="/About" />
                </Switch>
                <Footer />
            </BrowserRouter>
          );
    }
}
 
export default Main;