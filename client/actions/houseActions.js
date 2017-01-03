import Axios from 'axios';
import { ADD_HOUSE_SUCCESS } from './actionTypes';

const apiUrl = 'http://localhost:8080/api/houses';
// Sync Action
export const fetchHousesSuccess = (houses) => {
  return {
    type: 'FETCH_HOUSES_SUCCESS',
    houses
  };
};
//Async Action
export const fetchHouses = () => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {
    // Returns a promise
    return Axios.get(apiUrl)
      .then(response => {
        // Dispatch another action
        // to consume data

        dispatch(fetchHousesSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const addHouseSuccess = (house) => {
  return {
    type: ADD_HOUSE_SUCCESS,
    house
  };
};

export const createHouse = (house) => {
  console.log(house);
  return Axios.post('/api/product/house/addHouse', house);
};
