import * as types from '../mutation-types.js'

export default function createChatSocketPlugin () {
  return store => {
    console.log('Socket chat plugin is already to use')
    /* window.socket.on('refresh message', function (message) {
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
      console.log(mutation.type)
      if (mutation.type === 'conversations/' + types.RECEIVE_CONVERSATIONS) {
        state.conversations.conversations.forEach(function (conv) {
          window.socket.emit('enter conversation', {conversationId: conv.conversationId})
        })
      }
    })
  }
}
