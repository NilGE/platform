import { combineReducers } from 'redux';
import {booksReducer, bookReducer} from './bookReducers';
import {usersReducer} from './userReducers';
import productReducer from './productReducers';
import flashMessages from './flashMessages';
import authReducer from './authReducer';
import houseReducer from './houseReducers';

export default combineReducers({
  books: booksReducer,
  book: bookReducer,
  users: usersReducer,
  flashMessages: flashMessages,
  auth: authReducer,
  product: productReducer,
  houses: houseReducer
});
