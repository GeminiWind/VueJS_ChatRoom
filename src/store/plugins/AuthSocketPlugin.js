import UserLoggedIn from '@events/UserLoggedIn';
import * as types from '../mutation-types';

export default function createAuthSocketPlugin() {
  return (store) => {
    store.subscribe((mutation) => {
      // fire event new user loggin application
      if (mutation.type === `auth/${types.GET_PROFILE_SUCCESS}`) {
        new UserLoggedIn(mutation.payload).dispatch();
      }
    });
  };
}
