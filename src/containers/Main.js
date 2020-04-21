import React, { Component } from 'react';
import Header from '../Components/Navbar';
import Contact from '../Components/Contact';
import Profile from './Profile';
import Footer from '../Components/Footer';
import SignInAndSignUpPage from './sign-in-and-sign-up';
import Admin from '../Components/Admin'
import { Switch, Route, Redirect,BrowserRouter } from 'react-router-dom';

class Main extends Component {
    render() { 
        return (
            <>
            <BrowserRouter>
            <Header />
                <Switch>
                    <Route exact path='/Profile' component = { Profile } />
                    <Route exact path='/Contact' component = { Contact } />
                    <Route exact path='/signin' component = {SignInAndSignUpPage}/>
                    <Route exact path='/Admin' component={Admin}/>
                    <Redirect to="/Profile"/>
                </Switch>
                <Footer/>
            </BrowserRouter>
               
            </>
        );
    }
}
 
export default Main;