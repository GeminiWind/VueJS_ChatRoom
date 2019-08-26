import io from 'socket.io-client';

console.log(process.env.SERVER_BASE_URL);

export default {
  install(Vue, baseURL = process.env.SERVER_BASE_URL) {
    console.log(process.env.SERVER_BASE_URL, 'wtf');
    window.socket = io.connect(baseURL);
    Object.defineProperty(Vue.prototype, '$socket', { value: window.socket });
  },
};
