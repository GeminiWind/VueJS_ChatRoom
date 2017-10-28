import * as configs from '../../config/app'

import axios from 'axios'

export default {
  install: function (Vue, baseURL = configs.BASE_URL) {
    window.axios = axios.create({
      baseURL: baseURL,
      timeout: 5000
    })
    // axiosInstance.getInstance = () => {
    //   return axiosInstance
    // }
    // axiosInstance.setAuthorization = (value) => {
    //   axiosInstance.defaults.headers.common['Authorization'] = value
    // }
    // axiosInstance.deleteAuthorization = () => {
    //   delete axiosInstance.defaults.headers.common['Authorization']
    // }
    Object.defineProperty(Vue.prototype, '$http', { value: window.axios })
  }
}
