import * as types from '../mutation-types.js'
import UserLoggedIn from '@events/UserLoggedIn.js'

export default function createAuthSocketPlugin () {
  return store => {
    store.subscribe((mutation, state) => {
      // fire event new user loggin application
      if (mutation.type === 'auth/' + types.GET_PROFILE_SUCCESS) {
      	new UserLoggedIn(mutation.payload).dispatch()
      }
    })
  }
}
