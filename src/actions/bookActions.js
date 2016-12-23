import Axios from 'axios';
import * as actionTypes from './actionTypes';

const apiUrl = 'http://localhost:8080/api/books';
// Sync Action
export const fetchBooksSuccess = (books) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    books
  };
};
//Async Action
export const fetchBooks = () => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {
    // Returns a promise
    return Axios.get(apiUrl)
      .then(response => {
        // Dispatch another action
        // to consume data
        dispatch(fetchBooksSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createBookSuccess = (book) => {
  console.log('createBook: ' + book);
  return {
    type: 'CREATE_BOOK_SUCCESS',
    book
  };
};

export const createBook = (book) => {
  return (dispatch) => {
    return Axios.post(apiUrl, book)
      .then(response => {
        // Dispatch a synchronous action
        // to handle data
        console.log('response.data: '+response.data);
        dispatch(createBookSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchBookByIdSuccess = (book) => {
  return {
    type: actionTypes.FETCH_BOOK_BY_ID_SUCCESS,
    book
  };
};
// Async Action
export const fetchBookById = (bookId) => {
  return (dispatch) => {
    return Axios.get(apiUrl + '/' +bookId)
      .then(response => {
        // Handle data with sync action
        dispatch(fetchBookByIdSuccess(response.data));
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

// Sync add to cart
export const addToCartSuccess = (item) => {
  return {
    type: 'ADD_TO_CART_SUCCESS',
    item
  };
};
// Async add to cart
export const addToCart = (item) => {
  return (dispatch) => {
    return Axios.post('http://57c64baac1fc8711008f2a82.mockapi.io/Cart', item)
      .then(response => {
        dispatch(addToCartSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};
// Sync load cart
export const fetchCartSuccess = (items) => {
  return {
    type: 'FETCH_CART_SUCCESS',
    items
  };
};
// Async load cart
export const fetchCart = () => {
  return (dispatch) => {
    return Axios.get('http://57c64baac1fc8711008f2a82.mockapi.io/Cart')
      .then(response => {
        dispatch(fetchCartSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};
