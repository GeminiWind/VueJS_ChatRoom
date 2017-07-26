import 'bootstrap/dist/css/bootstrap.css'
require('font-awesome/css/font-awesome.css')
import * as configs from '../config/app.js'
window.axios = require('axios')
axios.defaults.baseURL = configs.BASE_URL
// Swal2 for alert modal
window.swal = require('sweetalert2')
import 'sweetalert2/src/sweetalert2.scss'
// Socket-io Client
window.io = require('socket.io-client')
window.socket = window.io.connect(configs.BASE_URL)
import 'vodal/common.css'
import 'vodal/rotate.css'
// Jquery
global.jQuery = global.$ = require('jquery')
require('bootstrap')
