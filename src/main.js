import Vue from 'vue'
import Router from './routes/routes.js'
import store from './store/store.js'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import VeeValidate from 'vee-validate'
import Vodal from 'vodal'
import vSelect from 'vue-select'
import Navbar from './components/Navbar'
import VueImgInputer from 'vue-img-inputer'
import VueLetterAvatar from 'vue-letter-avatar'
import VueChatScroll from 'vue-chat-scroll'
import { default as Http } from '@plugins/axios'

require('../bootstrap/bootstrap')
var moment = require('moment')

Vue.use(VeeValidate)
Vue.use(VueLetterAvatar)
Vue.use(VueChatScroll)
Vue.use(Http)

Vue.component(Vodal.name, Vodal)
Vue.component('v-select', vSelect)
Vue.component('VueImgInputer', VueImgInputer)
Vue.component('Navbar', Navbar)

Vue.config.silent = true

Router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.matched.some(record => record.meta.forVisitor)) {
    if (store.getters['auth/isAuthenticated']) {
      next({
        path: '/feed'
      })
    } else next()
  } else if (to.matched.some(record => record.meta.forAuth)) {
    if (!store.getters['auth/isAuthenticated']) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else next()
})
Router.afterEach((to, from) => {
  NProgress.done()
})
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

new Vue({
  el: '#app',
  router: Router,
  store: store
})
