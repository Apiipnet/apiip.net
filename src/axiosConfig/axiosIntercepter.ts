import axios from 'axios';

const instance = axios.create();
instance.interceptors.response.use(
  (response: any) => {
    const myData = response.data?.data !== undefined ? response.data.data : response.data;
    return myData;
  },
  (error: any) => {
    return Promise.reject(error.response?.data);
  },
);

export default instance;
