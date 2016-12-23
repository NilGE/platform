import { combineReducers } from 'redux';
import {booksReducer, bookReducer} from './bookReducers';
import {usersReducer} from './userReducers';

export default combineReducers({
  books: booksReducer,
  book: bookReducer,
  users: usersReducer
});
