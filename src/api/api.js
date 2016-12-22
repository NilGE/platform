import axios from 'axios';

export const fetchUsers = () => {
  return axios.get('/api/users')
              .then(resp => resp.data);
};
