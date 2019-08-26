import EventProvider from './EventProvider';

export default class NewConversationWasCreated extends EventProvider {
  constructor(data) {
    super(data, 'conversation');
  }
}
