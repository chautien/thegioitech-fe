import axios from 'axios';
const client = axios.create({
  baseURL: 'https://thegioitech-be.herokuapp.com/',
});

client.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  async (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default client;
