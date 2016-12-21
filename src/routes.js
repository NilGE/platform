import React  from 'react';
import {Route, IndexRoute} from 'react-router';
import Home from './components/common/home';
import About from './components/common/about';
import Book from './components/book/book';
import BookDetailsPage from './components/book/bookDetailsPage';
import CartPage from './components/cart/cartPage';
import App from './components/App';



export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}></IndexRoute>
    <Route path="/about" component={About}></Route>
    <Route path="/books" component={Book}></Route>
    <Route path="/books/:id" component={BookDetailsPage}></Route>
    <Route path="/cart" component={CartPage}></Route>
  </Route>
);
