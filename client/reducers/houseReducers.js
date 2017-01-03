import * as actionTypes from '../actions/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
  case actionTypes.ADD_HOUSE_SUCCESS:
    return action.house;
  case actionTypes.FETCH_HOUSES_SUCCESS:
    console.log('Fetch houses success');
    return action.house;

  default:
    return state;
  }
};
