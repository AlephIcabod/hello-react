import React from 'react';
import {Route,Switch} from 'react-router-dom';

import App from './components/App';
import About from './components/About';
import Contact from './components/Contact';
import Page404 from './components/PageError';

import Home from './containers/Home';

const AppRoutes=()=>
    <App>
        <Switch>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/" component={Home}/>
            <Route component={Page404}/>
        </Switch>
    </App>;

export default AppRoutes;