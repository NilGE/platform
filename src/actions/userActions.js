import axios from 'axios';
import jwtDecode from 'jwt-decode';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import { SET_CURRENT_USER } from './actionTypes';

// Sync get all users
export const fetchUsersSuccess = (users) => {
  return {
    type: 'FETCH_USERS_SUCCESS',
    users: users
  }
};
//Async get all users
export const fetchUsers = () => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {
    // Returns a promise
    return axios.get('/api/users')
      .then(response => {
        // console.log(response.data);
        // Dispatch another action
        // to consume data
        dispatch(fetchUsersSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

// Sync add a user
export const addUserSuccess = (user) => {
  return {
    type: 'ADD_USER_SUCCESS',
    user
  }
};
// Async add a user
export const addUser = (user) => {
  return (dispatch) => {
    return axios.post('/api/addUser', user);
  };
};

// Set user authentication

export const setCurrentUserSuccess = (user) => {
  return {
    type: SET_CURRENT_USER,
    user
  };
};

export const login = (data) => {
  return dispatch => {
    return axios.post('/api/auth', data).then(res => {
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUserSuccess(jwtDecode(token)));
    });
  };
};

export const logout = () => {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUserSuccess({}));
  };
};
