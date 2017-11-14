import Event from '@services/Event';

export default class UserLoggedIn extends Event {
  constructor(data) {
    super(data, 'login');
  }
}
