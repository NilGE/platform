import { combineReducers } from 'redux';
import { usersReducer, authReducer } from './userReducers';
import { flashMessages } from './flashMessages';
import { houseReducer, housesReducer } from './houseReducers';

export default combineReducers({
  users: usersReducer,
  flashMessages: flashMessages,
  auth: authReducer,
  house: houseReducer,
  houses: housesReducer
});
