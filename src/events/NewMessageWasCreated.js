import EventProvider from './EventProvider';

export default class NewMessageWasCreated extends EventProvider {
  constructor(data) {
    super(data, 'new message');
  }
}
