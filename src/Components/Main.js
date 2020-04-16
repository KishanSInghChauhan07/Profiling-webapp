import React, { Component } from 'react';
import Header from './Navbar';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience'
import Mentor from './Mentor';
import Profile from './Profile';
import Footer from './Footer';

import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    render() { 
        return (
            <>
                <Header />
                <Switch>
                    <Route exact path='/About' component={About} />
                    <Route exact path='/Mentor' component={Mentor} />
                    <Route exact path='/Experience' component={Experience} />
                    <Route exact path='/Contact' component={Contact} />
                    <Route exact path='/Projects' component={Projects} />
                    <Route exact path='/Skills' component={Skills} />
                    <Route exact path='/Education' component={Education} />
                    <Route exact path='/Profile' component={Profile} />
                    <Redirect to="/About" />
                </Switch>
                <Footer/>
            </>
        );
    }
}
 
export default Main;