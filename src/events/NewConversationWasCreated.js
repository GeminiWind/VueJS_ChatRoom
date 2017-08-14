import Event from '@services/Event'

export default class NewConversationWasCreated extends Event {
  constructor (data) {
    super(data, 'conversation')
  }
}
