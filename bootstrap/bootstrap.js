import 'bootstrap/dist/css/bootstrap.css'
import 'vodal/common.css'
import 'vodal/rotate.css'
import swal from '@plugins/swal'
import socket from '@plugins/socket'
require('font-awesome/css/font-awesome.css')
// Swal2 for alert modal
window.swal = swal
// Socket-io Client
window.socket = socket
// Jquery
global.jQuery = global.$ = require('jquery')
require('bootstrap')
