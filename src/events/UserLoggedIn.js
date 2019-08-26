import EventProvider from './EventProvider';

export default class UserLoggedIn extends EventProvider {
  constructor(data) {
    super(data, 'login');
  }
}
