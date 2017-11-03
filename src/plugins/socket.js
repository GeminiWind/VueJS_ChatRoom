import * as configs from '../../config/app'

let io = require('socket.io-client')

export default {
  install: function (Vue, baseURL = configs.BASE_URL) {
    window.socket = io.connect(configs.BASE_URL)
    Object.defineProperty(Vue.prototype, '$socket', { value: window.socket })
  }
}
