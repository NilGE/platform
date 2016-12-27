import axios from 'axios';

export const createHouse = (house) => {
  return dispatch => {
    return axios.post('/api/product/house/addHouse', house);
  };
};
