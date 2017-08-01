import * as configs from '../config/app.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'sweetalert2/src/sweetalert2.scss'
import 'vodal/common.css'
import 'vodal/rotate.css'
require('font-awesome/css/font-awesome.css')
window.axios = require('axios')
window.axios.defaults.baseURL = configs.BASE_URL
// Swal2 for alert modal
window.swal = require('sweetalert2')
// Socket-io Client
window.io = require('socket.io-client')
window.socket = window.io.connect(configs.BASE_URL)
// Jquery
global.jQuery = global.$ = require('jquery')
require('bootstrap')
