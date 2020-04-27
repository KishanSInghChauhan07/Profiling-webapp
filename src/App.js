import React from 'react';
import './App.css';
import Main from './containers/Main';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';

function App() {
  return ( 
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Main />
        </PersistGate>  
      </Provider>
    </>
  );
}

export default App;
