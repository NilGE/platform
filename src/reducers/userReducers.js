import * as actionTypes from '../actions/actionTypes';

export const usersReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS_SUCCESS:
          console.log(action.users);
          return action.users;
    default:
          return state;
  }
};
