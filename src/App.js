import React from 'react';
import './App.css';
import Main from './Components/Main';
import Login from './Components/Login'
import Signup from './Components/Signup'
import Mentor from './Components/Mentor'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return ( 
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/Login" component={Login}/>
        <Route exact path='/Signup' component = {Signup}/>
        <Route exact path='/Mentor' component={Mentor}/>
        <Route exact path="*" component={Main}/>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
