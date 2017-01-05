import { CREATE_NEW_SUCCESS } from '../actions/actionTypes';

export const productReducer = (state = [], action) => {
  switch (action.type) {
  case CREATE_NEW_SUCCESS:
    return [
      ...state,
      Object.assign({}, action.product)
    ];
  default:
    return state;
  }
};
