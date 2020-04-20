import React, { Component } from 'react';
import Header from './Navbar';
import Contact from './Contact';
import Profile from './Profile';
import Footer from './Footer';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    render() { 
        return (
            <>
                <Header />
                <Switch>
                    <Route exact path='/Profile' component = { Profile } />
                    <Route exact path='/Contact' component = { Contact } />

                    <Redirect to="/Profile"/>
                </Switch>
                <Footer/>
            </>
        );
    }
}
 
export default Main;