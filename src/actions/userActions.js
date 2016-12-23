import axios from 'axios';

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
        console.log(response.data);
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
    item
  }
};
// Async add a user
export const addUser = (user) => {
  return (dispatch) => {
    return axios.post('/api/addUser', user)
      .then(response => {
        dispatch(addToCartSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};
