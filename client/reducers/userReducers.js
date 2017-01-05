import { SET_CURRENT_USER, FETCH_USERS_SUCCESS } from '../actions/actionTypes';
import isEmpty from 'lodash/isEmpty';

export const usersReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
          return action.users;
    default:
          return state;
  }
};

const initialState = {
  isAuthenticated: false,
  user: {}
};


export const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !isEmpty(action.user),
        user: action.user
      };
    default:
      return state;
  }
};
