import { combineReducers } from 'redux';
import {booksReducer, bookReducer} from './bookReducers';
import {usersReducer} from './userReducers';
import flashMessages from './flashMessages';
import authReducer from './authReducer';

export default combineReducers({
  books: booksReducer,
  book: bookReducer,
  users: usersReducer,
  flashMessages: flashMessages,
  auth: authReducer
});
