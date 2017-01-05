import { combineReducers } from 'redux';
import {usersReducer} from './userReducers';
import productReducer from './productReducers';
import flashMessages from './flashMessages';
import authReducer from './authReducer';
import { houseReducer, housesReducer } from './houseReducers';

export default combineReducers({
  users: usersReducer,
  flashMessages: flashMessages,
  auth: authReducer,
  product: productReducer,
  house: houseReducer,
  houses: housesReducer
});
