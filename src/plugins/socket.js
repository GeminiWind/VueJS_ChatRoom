import * as configs from '../../config/app.js'
let io = require('socket.io-client')

let socket = io.connect(configs.BASE_URL)

export default socket
