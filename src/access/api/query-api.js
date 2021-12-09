import { axiosClient } from './axios-client';

export const query = () => ({
  product: {
    getAll: () => axiosClient.get('/product'),
    getFilter: (filter) =>
      filter === undefined ? null : axiosClient.get('/product/filter' + filter),
    getOne: (id) =>
      id === undefined ? null : axiosClient.get('/product' + id),
  },
  category: {
    getAll: () => axiosClient.get('/category'),
    getFilter: (filter) =>
      filter === undefined ? null : axiosClient.get('/category' + filter),
    getOne: (id) =>
      id === undefined ? null : axiosClient.get('/category' + id),
  },
  auth: {
    login: (payload) =>
      payload === undefined ? null : axiosClient.post('/login', payload),
    register: (payload) =>
      payload === undefined ? null : axiosClient.post('/register', payload),
  },
});
