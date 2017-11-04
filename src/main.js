import Vue from 'vue'
import VeeValidate from 'vee-validate'
import Vodal from 'vodal'
import vSelect from 'vue-select'
import Navbar from './components/Navbar'
import VueImgInputer from 'vue-img-inputer'
import VueLetterAvatar from 'vue-letter-avatar'
import VueChatScroll from 'vue-chat-scroll'
import Http from '@plugins/axios'
import Socket from '@plugins/socket'
import Swal from '@plugins/swal'
import store from './store/store.js'
import Router from './routes'

require('../bootstrap/bootstrap')
const moment = require('moment')

Vue.use(VeeValidate)
Vue.use(VueLetterAvatar)
Vue.use(VueChatScroll)
Vue.use(Http)
Vue.use(Socket)
Vue.use(Swal)

Vue.component(Vodal.name, Vodal)
Vue.component('v-select', vSelect)
Vue.component('VueImgInputer', VueImgInputer)
Vue.component('Navbar', Navbar)

Vue.config.silent = true

// Filter
Vue.filter('dateForHumans', (date) => {
  return moment(date).format('ddd, h:mm A')
})
Vue.filter('substring', (string, value) => {
  if (string.length < value) {
    return string
  }
  return string.substring(0, value) + '...'
})

// eslint-disable-next-line
new Vue({
  el: '#app',
  router: Router,
  store: store
})
