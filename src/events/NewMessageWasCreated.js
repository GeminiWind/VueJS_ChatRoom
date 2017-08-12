import Event from '@services/Event'

export default class NewMessageWasCreated extends Event {
  constructor (data) {
    super(data, 'new message')
  }
}
