import * as actionTypes from '../actions/actionTypes';

export const houseReducer = (state = {}, action) => {
  switch (action.type) {
  case actionTypes.ADD_HOUSE_SUCCESS:
    return action.house;
  default:
    return state;
  }
};


export const housesReducer = (state = [], action) => {
  switch (action.type) {
  case actionTypes.FETCH_HOUSES_SUCCESS:
      return action.houses;
  default:
    return state;
  }
};
