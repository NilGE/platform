import axios from 'axios';
import { ADD_HOUSE_SUCCESS } from './actionTypes';

export const addHouseSuccess = (house) => {
  return {
    type: ADD_HOUSE_SUCCESS,
    house
  };
};

export const createHouse = (house) => {
  return axios.post('/api/product/house/addHouse', house);
};
