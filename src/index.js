import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Context} from './Context';
import firebase from './firebase/config'
import Contexts from './Context'

ReactDOM.render(
    <Context.Provider value={{firebase}}>
        <Contexts>
          <App/>
        </Contexts>
    </Context.Provider>
, document.getElementById('root'));
