import axios from "axios";
const client = axios.create({
    baseURL: process.env.baseURL,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
});

client.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
});

client.interceptors.response.use(async (response) => {
    return response.data
}, error => {
    return Promise.reject(error)
});

export default client;
