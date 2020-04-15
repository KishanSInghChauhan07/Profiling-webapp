import React from 'react';
import './App.css';
import Main from './Components/Main.js';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-dark text-light">
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
