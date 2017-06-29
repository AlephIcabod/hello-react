import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Bluebird from 'bluebird';
import {Provider} from 'react-redux';

import AppRoutes from './routes';

import './index.css';

import configureStore from './lib/configureStore';
import rootReducer from './reducers';


window.Promise= Bluebird;


Bluebird.config({warnings:false});
window-addEventListener('unhandledrejection',error=>{
    error.preventDefault();
    if(process.env.NODE_ENV!=='production'){
        console.warn('Unhandled promise rejection warning.',error.detail);
    }
});

const store=configureStore({
    initialState:window.initialState
},rootReducer);

render(
    <Provider store={store}>
        <Router>
            <AppRoutes />
        </Router>
    </Provider>,
    document.getElementById('root')
);
