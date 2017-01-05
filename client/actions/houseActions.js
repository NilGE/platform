import axios from 'axios';
import { ADD_HOUSE_SUCCESS, FETCH_HOUSES_SUCCESS, SET_HOUSE_SUCCESS } from './actionTypes';

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
    return axios.get('/api/product/house/getAll')
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
  return (dispatch) => {
    return axios.post('/api/product/house/addOne', house)
      .then(response => {
        dispatch(addHouseSuccess(response.data));
      }).catch(error => {
        throw(error);
      });
  };
};

export const setHouse = (house) => {
  return {
    type: SET_HOUSE_SUCCESS,
    house
  }
};
