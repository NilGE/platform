import * as actionTypes from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
  case actionTypes.CREATE_NEW_SUCCESS:
    return [
      ...state,
      Object.assign({}, action.product)
    ];
  default:
    return state;
  }
};
