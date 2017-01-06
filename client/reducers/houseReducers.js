import { ADD_HOUSE_SUCCESS, SET_HOUSE_SUCCESS, FETCH_HOUSES_SUCCESS, FETCH_HOUSE_SUCCESS } from '../actions/actionTypes';

export const houseReducer = (state = {}, action) => {
  switch (action.type) {
  case ADD_HOUSE_SUCCESS:
    return action.house;
  case SET_HOUSE_SUCCESS:
    return action.house;
  case FETCH_HOUSE_SUCCESS:
    return action.house;
  default:
    return state;
  }
};


export const housesReducer = (state = [], action) => {
  switch (action.type) {
  case FETCH_HOUSES_SUCCESS:
      return action.houses;
  default:
    return state;
  }
};
