import React from 'react';
import './App.css';
import Main from './Components/Main';
import Login from './Components/Login'
import Signup from './Components/Signup'
import Admin from './Components/Admin'
import { BrowserRouter, Switch, Route ,Redirect} from 'react-router-dom';

function App() {
  return ( 
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path='/Signup' component = {Signup}/>
        <Route exact path='/Admin' component={Admin}/>
        <Route exact path="*" component={Main}/>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
