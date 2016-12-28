import Axios from 'axios';


const apiUrl = 'http://localhost:8080/api/products';
// Sync Action
export const fetchProductsSuccess = (products) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    products
  };
};
//Async Action
export const fetchProducts = () => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {
    // Returns a promise
    return Axios.get(apiUrl)
      .then(response => {
        // Dispatch another action
        // to consume data
        dispatch(fetchProductsSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createNewSuccess = (product) => {
  return {
    type: 'CREATE_NEW_SUCCESS',
    product
  };
};

export const createNew = (product) => {
  return (dispatch) => {
    return Axios.post(apiUrl, product)
      .then(response => {
        // Dispatch a synchronous action
        // to handle data
        dispatch(createNewSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};



/*
The dispatcher function returned by the action creator function must return
a promise which when resolved, dispatches another synchronous action to
handle the data that was returned.
*/
