import NewMessageWasCreated from '@events/NewMessageWasCreated';
import NewConversationWasCreated from '@events/NewConversationWasCreated';
import * as types from '../mutation-types';

export default function createChatSocketPlugin() {
  return (store) => {
    console.log('Socket chat plugin is already to use');
    /*  window.socket.on('refresh message', function (message) {
      if (message.conversationId === store.state.conversations.currentConversationId) {
        store.state.conversations.currentConversation.push(message)
      }
      store.dispatch('conversations/fetchConversations')
    })
    // else updated snippet whenver new message
    window.socket.on('new message', function (data) {
      store.dispatch('conversations/fetchConversations')
    }) */
    store.subscribe((mutation, state) => {
      console.log(mutation.type);
      // automatically subcirbe all conversation of authenticated user
      if (mutation.type === `conversations/${types.RECEIVE_CONVERSATIONS}`) {
        state.conversations.conversations.forEach((conv) => {
          window.socket.emit('enter conversation', { conversationId: conv.conversationId });
        });
      }
      // update chat snippet of the left side whenever conversation change
      if (mutation.type === `conversations/${types.PUSH_NEW_MSG_IN_CUR_CONVERSATION}`) {}
      if (mutation.type === `conversations/${types.PUSH_NEW_MSG_IN_CUR_CONVERSATION}` ||
          mutation.type === `conversations/${types.PUSH_NEW_CONVERSATION}` ||
          mutation.type === `conversations/${types.DELETE_CONVERSATION}`) {
        store.dispatch('conversations/fetchConversations');
        if (mutation.type === `conversations/${types.PUSH_NEW_MSG_IN_CUR_CONVERSATION}`) {
          const message = mutation.payload;
          const data = { conversationId: mutation.payload.conversationId, message };
          new NewMessageWasCreated(data).dispatch();
        }
        if (mutation.type === `conversations/${types.PUSH_NEW_CONVERSATION}`) {
          const message = mutation.payload;
          const data = { conversationId: mutation.payload.conversationId, message };
          new NewMessageWasCreated(data).dispatch();
          new NewConversationWasCreated(data).dispatch();
        }
      }
    });
  };
}
