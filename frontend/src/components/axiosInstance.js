import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL // The base URL for all requests
});

export default axiosInstance;
