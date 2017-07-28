import Vue from 'vue'
import Vuex from 'vuex'
import {default as authModule} from './modules/Auth.js'
import {default as conversationsModule} from './modules/Conversations.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth: authModule,
    conversations: conversationsModule
  }
})
