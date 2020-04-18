import React from 'react';
import './App.css';
import Main from './Components/Main';
import Login from './Components/Login'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return ( 
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="*" component={Main}/>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
