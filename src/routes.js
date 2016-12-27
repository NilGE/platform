import React  from 'react';
import {Route, IndexRoute} from 'react-router';
import Home from './components/common/home';
import About from './components/common/about';
import Book from './components/book/book';
import BookDetailsPage from './components/book/bookDetailsPage';
import User from './components/user/user';
import SignupPage from './components/user/SignupPage';
import LoginPage from './components/user/LoginPage';
import App from './components/App';
import NewEventPage from './components/events/NewEventPage';
import requireAuth from './utils/requireAuth';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}></IndexRoute>
    <Route path="/about" component={About}></Route>
    <Route path="/books" component={Book}></Route>
    <Route path="/books/:id" component={BookDetailsPage}></Route>
    <Route path="/user" component={requireAuth(User)}></Route>
    <Route path="/signup" component={SignupPage}></Route>
    <Route path="/login" component={LoginPage}></Route>
    <Route path='/new-event' component={requireAuth(NewEventPage)} />
  </Route>
);
