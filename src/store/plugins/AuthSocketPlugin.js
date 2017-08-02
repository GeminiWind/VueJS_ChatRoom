import * as types from '../mutation-types.js'

export default function createChatSocketPlugin () {
  return store => {
    store.subscribe((mutation, state) => {
      // automatically subcirbe all conversation of authenticated user
      if (mutation.type === 'conversations/' + types.RECEIVE_CONVERSATIONS) {

      }
    })
  }
}
