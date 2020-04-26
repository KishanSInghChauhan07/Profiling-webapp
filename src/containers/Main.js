import React, { Component }  from 'react';
import Header from '../Components/Navbar/Navbar.js';
import Contact from '../Components/Contact';
import Profile from './Profile';
import Footer from '../Components/Footer';
import SignInAndSignUpPage from './sign-in-and-sign-up';
import Admin from '../Components/admin/Admin';
import Recruiter from '../Components/recruiter/recruiter.js';
import {connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Switch, Route, Redirect,BrowserRouter } from 'react-router-dom';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';

import { setCurrentUser } from '../redux/user/user-actions';
import { selectCurrentUser } from '../redux/user/user-selectors';

class Main extends Component {
  

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }

      setCurrentUser(userAuth );
    });
  }


  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() { 
      return (
          <>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path='/Profile' component = { Profile } />
                    <Route exact path='/Contact' component = { Contact } />
                    <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/Profile' />) : (<SignInAndSignUpPage />)}/>
                    <Route exact path='/Admin' component={Admin}/>
                    <Route exact path='/Recruiter' component={Recruiter}/>
                    <Redirect to="/Profile"/>
                </Switch>
                <Footer/>
            </BrowserRouter>
          </>
        );
    }
}
 
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);