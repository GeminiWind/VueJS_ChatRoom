import Vue from 'vue'
import Auth from './services/Auth.js'
import Router from './routes/routes.js'
import store from './store/store.js'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import VeeValidate from 'vee-validate'
import Vodal from 'vodal'
import vSelect from 'vue-select'
import Navbar from './components/Navbar.vue'
import VueImgInputer from 'vue-img-inputer'
import VueLetterAvatar from 'vue-letter-avatar'
import VueChatScroll from 'vue-chat-scroll'

require('./bootstrap')
var moment = require('moment')

Vue.use(Auth)
Vue.use(VeeValidate)
Vue.use(VueLetterAvatar)
Vue.use(VueChatScroll)

Vue.component(Vodal.name, Vodal)
Vue.component('v-select', vSelect)
Vue.component('VueImgInputer', VueImgInputer)
Vue.component('Navbar', Navbar)

Router.beforeEach((to, from, next) => {
  NProgress.start()
  if (Vue.auth.isAuthenticated()) {
    window.axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')
  }
  if (to.matched.some(record => record.meta.forVisitor)) {
    if (Vue.auth.isAuthenticated()) {
      next({
        path: '/feed'
      })
    } else next()
  } else if (to.matched.some(record => record.meta.forAuth)) {
    if (!Vue.auth.isAuthenticated()) {
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
