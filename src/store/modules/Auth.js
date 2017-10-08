import * as types from '../mutation-types'

const state = {
  error: null,
  token: null,
  expirationAt: null,
  isAuthenticating: false,
  profile: null
}

const mutations = {
  [types.LOGIN_REQUEST] (state) {
    state.isAuthenticating = true
  },

  [types.LOGIN_FAILURE] (state, { error }) {
    state.error = error
    state.isAuthenticating = false
  },

  [types.LOGIN_SUCCESS] (state, { token, expiration }) {
    state.token = token
    state.error = null
    state.expirationAt = Date.now() + parseInt(expiration)
    state.isAuthenticating = false
  },

  [types.LOGOUT] (state) {
    state.token = null
    state.profile = null
  },

  [types.GET_PROFILE_FAILURE] (state, { error }) {
    state.error = error
  },

  [types.GET_PROFILE_SUCCESS] (state, profile) {
    state.profile = profile
    state.error = null
  }
}

const actions = {
  login: ({ commit, state }, cridential) => {
    return new Promise((resolve, reject) => {
      commit(types.LOGIN_REQUEST)
      window.axios.post('/login', cridential).then(response => {
        if (response.data.error !== null) {
          commit(types.LOGIN_FAILURE, { error: response.data.error })
          return reject(response.data.error)
        }
        commit(types.LOGIN_SUCCESS, { token: response.data.data.token, expiration: response.data.data.expiration })
        window.axios.defaults.headers.common['Authorization'] = response.data.data.token
        resolve()
      })
    })
  },
  logout: ({ commit }) => {
    commit(types.LOGOUT)
    delete window.axios.defaults.headers.common['Authorization']
    return Promise.resolve()
  },
  getProfile: ({ commit, dispatch, state }) => {
    return new Promise((resolve, reject) => {
      if (state.profile) {
        // Do not load profile if it already exists in state.
        return resolve()
      }
      window.axios.get('/api/user').then(response => {
        if (response.data.error != null) {
          commit(types.GET_PROFILE_FAILURE, { error: response.data.error })
          return reject(response.data.error)
        }
        commit(types.GET_PROFILE_SUCCESS, response.data.data)
        return resolve()
      }).catch(function (error) {
        if (error.response.status === 401) {
          return dispatch(types.LOGOUT)
        }
      })
    })
  }
}

const getters = {
  isAuthenticated: (state) => {
    if (state.token && state.expirationAt > Date.now()) {
      return true
    }
    return false
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
