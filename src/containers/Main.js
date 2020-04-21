import React, { Component }  from 'react';
import Header from '../Components/Navbar';
import Contact from '../Components/Contact';
import Profile from './Profile';
import Footer from '../Components/Footer';
import SignInAndSignUpPage from './sign-in-and-sign-up';
import Admin from '../Components/Admin'
import { Switch, Route, Redirect,BrowserRouter } from 'react-router-dom';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';

class Main extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
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

      this.setState({ currentUser: userAuth });
    });
  }


  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
    render() { 
        return (
            <>
            <BrowserRouter>
            <Header currentUser={this.state.currentUser}/>
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