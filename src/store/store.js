import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import * as Cookies from 'js-cookie';
import * as authModule from './modules/Auth';
import * as conversationsModule from './modules/Conversations';
import createChatSocketPlugin from './plugins/ChatSocketPlugin';
import createAuthSocketPlugin from './plugins/AuthSocketPlugin';

Vue.use(Vuex);

const chatSocketPlugin = createChatSocketPlugin();
const authSocketPlugin = createAuthSocketPlugin();

export default new Vuex.Store({
  modules: {
    auth: authModule,
    conversations: conversationsModule,
  },
  plugins: [
    chatSocketPlugin,
    authSocketPlugin,
    createPersistedState({
      paths: ['auth.token', 'auth.expirationAt'],
      getState: key => Cookies.getJSON(key),
      setState: (key, state) => Cookies.set(key, state, { expires: 30 }),
    })],
});
