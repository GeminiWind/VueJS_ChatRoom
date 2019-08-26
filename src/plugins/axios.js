import axios from 'axios';

export default {
  install(Vue, baseURL = process.env.SERVER_BASE_URL) {
    window.axios = axios.create({
      baseURL,
    });

    Object.defineProperty(Vue.prototype, '$http', { value: window.axios });
  },
};
