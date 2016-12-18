import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
// Import custom components
import Home from './common/home';
import About from './common/about';
import Car from './car/car';
import Main from './common/main';

render(
    <Router history={browserHistory}>
        <Route path="/" component={Main} >
            <IndexRoute component={Home} />
            <Route path="/cars" component={Car} />
            <Route path="/about" component={About} />
        </Route>
    </Router>,
    document.getElementById('container')
);
