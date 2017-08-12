import * as configs from '../../config/app'
let axios = require('axios')
axios.defaults.baseURL = configs.BASE_URL

export default axios
