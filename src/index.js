// CREATING THE ELEMENT USING JSX

import React from 'react'; // DECLARING THE REACT

import ReactDOM from 'react-dom'; 

import App from './Component/App';

import { BrowserRouter } from 'react-router-dom';

import {createStore, applyMiddleware} from 'redux';
import{Provider} from 'react-redux';
import{thunk} from 'redux-thunk';
import {database} from './database/config'

import './styles/stylesheet.css';
import rootReducer from './redux/reducer'


const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root')); 