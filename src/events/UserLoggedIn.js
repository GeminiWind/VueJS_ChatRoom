import Event from '@services/Event.js'

export default class UserLoggedIn extends Event {
  constructor (data) {
    super(data, 'login')
  }
}
