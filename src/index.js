import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux' ;
import todoApp from './reducers/reducers' ;

//You may optionally specify the initial state as the second argument to createStore()
//const store = createStore(todoApp, window.STATE_FROM_SERVER)

const store = createStore(todoApp) ;



ReactDOM.render(<App />, document.getElementById('root'));

