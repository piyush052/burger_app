import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, applyMiddleware, compose,combineReducers} from 'redux';
import thunk from 'redux-thunk';

import {Provider} from 'react-redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";

import burgerBuilder from './store/reducer/BurgerBuilder'
import orderReducer from './store/reducer/Order'
import authReducer from './store/reducer/Auth'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    burgerBuilder : burgerBuilder,
    order : orderReducer,
    auth : authReducer
});

const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(<Provider
    store={store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
