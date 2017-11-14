import * as types from '../mutation-types';

export default {
  namespaced: true,
  state: {
    conversations: [],
    currentConversation: [],
    currentConversationId: '',
  },
  getters: {
    allConversation: state => state.conversations,
    currentConversation: state => state.currentConversation,
    currentConversationId: state => state.currentConversationId,
  },
  mutations: {
    [types.RECEIVE_CONVERSATIONS](state, conversations) {
      state.conversations = conversations;
    },
    [types.RECEIVE_CONVERSATION_CONTENT](state, currentConversation) {
      state.currentConversation = currentConversation;
    },
    [types.SET_CUR_CONVERSATION_ID](state, currentConversationId) {
      state.currentConversationId = currentConversationId;
    },
    [types.DELETE_CONVERSATION](state, { conversationIndex }) {
      state.conversations.splice(conversationIndex, 1);
    },
    [types.PUSH_NEW_CONVERSATION](state, conversation) {
      state.conversations.push(conversation);
    },
    [types.PUSH_NEW_MSG_IN_CUR_CONVERSATION](state, message) {
      state.currentConversation.push(message);
    },
  },
  actions: {
    fetchConversations({ commit }) {
      window.axios.get('/api/messages').then((response) => {
        commit(types.RECEIVE_CONVERSATIONS, response.data.data);
      }).catch((error) => {
        console.log(error);
        window.swal.error('Whoops', 'Look like something went wrong');
      });
    },
    fetchConversationContent({ commit }, conversationId) {
      window.axios.get(`/api/messages/${conversationId}`).then((response) => {
        commit(types.RECEIVE_CONVERSATION_CONTENT, response.data.data);
        commit(types.SET_CUR_CONVERSATION_ID, conversationId);
      }).catch((error) => {
        console.log(error);
        window.swal.error('Whoops', 'Look like something went wrong');
      });
    },
    replyConversation({ commit }, payload) {
      window.axios.post(`/api/messages/${payload.conversationId}`, { message: payload.message }).then((response) => {
        commit(types.PUSH_NEW_MSG_IN_CUR_CONVERSATION, response.data.data);
      }).catch((error) => {
        console.log(error);
        window.swal.error('Whoops', 'Look like something went wrong');
      });
    },
    replyConversationImage({ commit }, payload) {
      const config = { headers: { 'Content-Type': 'multipart/form-data' } };
      window.axios.post(`/api/messages/${payload.conversationId}`, payload.data, config).then((response) => {
        commit(types.PUSH_NEW_MSG_IN_CUR_CONVERSATION, response.data.data);
      }).catch((error) => {
        console.log(error);
        window.swal.error('Whoops', 'Look like something went wrong');
      });
    },
    deleteConversation({ commit, state }, payload) {
      window.axios.delete(`/api/messages/${payload.conversationId}`).then(() => {
        // eslint-disable-next-line max-len
        const conversationIndex = state.conversations.findIndex(conv => conv.conversationId === payload.conversationId);
        commit(types.DELETE_CONVERSATION, conversationIndex);
        window.swal({
          title: 'Success!',
          text: 'Your conversation was deleted.',
          timer: 1000,
          type: 'success',
        });
      }).catch((error) => {
        console.log(error);
        window.swal.error('Whoops', 'Look like something went wrong');
      });
    },
    createConversation({ commit, state }, payload) {
      // eslint-disable-next-line no-underscore-dangle
      window.axios.post(`/api/messages/new/${payload.receiver._id}`, { message: payload.body }).then((response) => {
        state.conversations.forEach((conv) => {
          // conversation is exist
          if (conv.conversationId === response.data.data.conversationId) {
            if (state.currentConversationId === response.data.data.conversationId) {
              commit(types.PUSH_NEW_MSG_IN_CUR_CONVERSATION, response.data.data);
            }
          } else {
            // not exist
            commit(types.PUSH_NEW_CONVERSATION, response.data.data);
          }
        });
        window.swal({
          title: 'Success!',
          text: 'Your message was sent.',
          timer: 1000,
          type: 'success',
        });
      }).catch((error) => {
        console.log(error);
        window.swal.error('Whoops', 'Look like something went wrong');
      });
    },
  },
};
