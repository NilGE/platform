import { combineReducers } from 'redux';
import { usersReducer, authReducer } from './userReducers';
import { productReducer } from './productReducers';
import { flashMessages } from './flashMessages';
import { houseReducer, housesReducer } from './houseReducers';

export default combineReducers({
  users: usersReducer,
  flashMessages: flashMessages,
  auth: authReducer,
  product: productReducer,
  house: houseReducer,
  houses: housesReducer
});
