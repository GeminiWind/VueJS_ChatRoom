import Event from '../services/Event.js'

export default class NewMessageWasCreated extends Event {
  constructor (data) {
    super(data, 'new message')
  }
}
