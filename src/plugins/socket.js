import * as configs from '../../config/app'
let io = require('socket.io-client')

let socket = io.connect(configs.BASE_URL)

export default socket
