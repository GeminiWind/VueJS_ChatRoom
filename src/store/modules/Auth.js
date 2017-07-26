import * as types from '../mutation-types.js'
export default {
  namespaced: true,
  state: {
    authenticatedUser: {}
  },
  getters: {
    user (state) {
      return state.authenticatedUser
    }
  },
  mutations: {
    [types.SET_USER] (state, user) {
      state.authenticatedUser = user
    },
    [types.UPDATE_USER] (state, user) {
      // handle update user
    }
  },
  actions: {
    getUser ({commit}) {
      axios.get('/api/user').then(response => {
        commit(types.SET_USER, response.data.data)
        socket.emit('login', response.data.data)
      }).catch(function (error) {
        swal({
          title: 'Whoops!',
          text: 'Look like something went wrong',
          type: 'error',
          confirmButtonText: 'OK'
        })
      })
    }
  }
}
