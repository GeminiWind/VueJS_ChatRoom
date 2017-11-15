import BASE_URL from '../../config/app';

const io = require('socket.io-client');

export default {
  install(Vue, baseURL = BASE_URL) {
    window.socket = io.connect(baseURL);
    Object.defineProperty(Vue.prototype, '$socket', { value: window.socket });
  },
};
