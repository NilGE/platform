import Axios from 'axios';
import { ADD_HOUSE_SUCCESS, FETCH_HOUSES_SUCCESS } from './actionTypes';

// Sync Action
export const fetchHousesSuccess = (houses) => {
  return {
    type: FETCH_HOUSES_SUCCESS,
    houses
  };
};
//Async Action
export const fetchHouses = () => {
  return (dispatch) => {
    return Axios.get('/api/product/house/getAll')
      .then(response => {
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
  return Axios.post('/api/product/house/addHouse', house);
};
