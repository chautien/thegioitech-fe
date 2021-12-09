const { default: axios } = require('axios');

const axiosClient = axios.create({
  baseURL: 'https://thegioitech-be.herokuapp.com/api',
  timeout: 15000,
});

// axiosClient.defaults.headers.post['Content-Type'] =
//   'application/x-www-form-urlencoded';

export { axiosClient };
