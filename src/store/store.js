import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {default as authModule} from './modules/Auth.js'
import {default as conversationsModule} from './modules/Conversations.js'

export default new Vuex.Store({
  modules: {
    auth: authModule,
    conversations: conversationsModule
  }
})
