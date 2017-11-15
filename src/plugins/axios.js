import axios from 'axios';

import BASE_URL from '../../config/app';

export default {
  install(Vue, baseURL = BASE_URL) {
    window.axios = axios.create({
      baseURL,
    });
    // axiosInstance.getInstance = () => {
    //   return axiosInstance
    // }
    // axiosInstance.setAuthorization = (value) => {
    //   axiosInstance.defaults.headers.common['Authorization'] = value
    // }
    // axiosInstance.deleteAuthorization = () => {
    //   delete axiosInstance.defaults.headers.common['Authorization']
    // }
    Object.defineProperty(Vue.prototype, '$http', { value: window.axios });
  },
};
