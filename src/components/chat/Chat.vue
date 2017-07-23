<template>
  <div class="main_section">
    <div class="container-fluid">
        <div class="chat_container">
            <div class="col-sm-3 chat_sidebar">
                <div class="row">
                    <div id="custom-search-input">
                        <div class="input-group col-md-12">
                            <input class=" search-query form-control" placeholder="Conversation" type="text" v-model=keyword @change="searchConversation">
                            <button class="btn btn-danger" type="button">
                                <span class="fa fa-search">
                                </span>
                            </button>
                        </div>
                    </div>
                    <div class="dropdown all_conversation">
                        <button aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" id="dropdownMenu2" type="button">
                            <i aria-hidden="true" class="fa fa-weixin">
                            </i>
                            All Conversations
                            <span class="caret pull-right">
                            </span>
                        </button>
                        <ul aria-labelledby="dropdownMenu2" class="dropdown-menu">
                            <li>
                                <a href="#">
                                    All Conversation
                                </a>
                                <ul class="sub_menu_ list-unstyled">
                                    <li>
                                        <a href="#">
                                            All Conversation
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">
                                    Unread Conversation
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="member_list">
                        <ul class="list-unstyled" v-for="conversation in conversations">
                            <li class="left clearfix" @click="fetchConversationContent(conversation.conversationId)">
                                <span class="chat-img pull-left">
                                    <img alt="User Avatar" class="img-circle" src="https://lh6.googleusercontent.com/-y-MY2satK-E/AAAAAAAAAAI/AAAAAAAAAJU/ER_hFddBheQ/photo.jpg">
                                    </img>
                                </span>
                                <div class="chat-body clearfix">
                                    <div class="header_sec">
                                        <strong class="primary-font">
                                            {{conversation.author.fullName}}
                                        </strong>
                                        <strong class="pull-right">
                                            {{conversation.created_at | dateForHumans}}
                                        </strong>
                                    </div>
                                    <div class="contact_sec">
                                        <strong class="primary-font">
                                            {{conversation.body | substring(15)}}
                                        </strong>
                                        <span class="badge pull-right">
                                            3
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!--chat_sidebar-->
            <div class="col-sm-9 message_section">
                <div class="row">
                    <div class="new_message_head">
                        <NewMessage @conversationcreated="createdNewConversation"></NewMessage>
                        <div class="pull-right" v-if="currentConversation.length!==0">
                            <div class="dropdown">
                                <button aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" id="dropdownMenu1" type="button">
                                    <i aria-hidden="true" class="fa fa-cogs">
                                    </i>
                                    Setting
                                    <span class="caret">
                                    </span>
                                </button>
                                <ul aria-labelledby="dropdownMenu1" class="dropdown-menu dropdown-menu-right">
                                    <li>
                                        <a href="#" @click="deleteConversation">
                                          <i class="fa fa-trash">
                                          </i>
                                              Delete this conversation
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!--new_message_head-->
                    <div class="chat_area">
                        <ul class="list-unstyled" v-chat-scroll v-if="currentConversation.length!==0" v-for="message in currentConversation">
                            <li class="left clearfix admin_chat" v-if="message.author.email === user.email">
                                <span class="chat-img1 pull-right">
                                  <img alt="User Avatar" class="img-circle" :src="message.author.avatarLink" v-if="message.author.avatarLink!= null">
                                  </img>
                                  <vue-letter-avatar :name="message.author.profile.first_name" size='40' :rounded=true v-else/>
                                </span>
                                <div class="chat-body1 clearfix">
                                    <p v-if="message.type === 'text'">
                                       {{message.body}}
                                    </p>
                                    <p v-else-if="message.type === 'image'">
                                      <img :src="message.body" width="400px" height="180px">
                                    </p>
                                    <div class="chat_time pull-left">
                                       {{message.created_at | dateForHumans}}
                                    </div>
                                </div>
                            </li>
                            <li class="left clearfix" v-else>
                                <span class="chat-img1 pull-left">
                                      <img alt="User Avatar" class="img-circle" :src="message.author.avatarLink" v-if="message.author.avatarLink!= null">
                                      </img>
                                      <vue-letter-avatar :name="message.author.profile.first_name" size='40' :rounded=true v-else/>
                                </span>
                                <div class="chat-body1 clearfix">
                                    <p v-if="message.type === 'text'">
                                       {{message.body}}
                                    </p>
                                    <p v-else-if="message.type === 'image'">
                                      <img :src="message.body" width="400px" height="180px">
                                    </p>
                                    <div class="chat_time pull-right">
                                        {{message.created_at | dateForHumans}}
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <!--chat_area-->
                    <div class="message_write" v-if="currentConversation.length!==0">
                        <textarea class="form-control" placeholder="type a message" v-model=message @keyup.enter="replyConversation()">
                        </textarea>
                        <div class="clearfix">
                        </div>
                        <div class="chat_bottom">
                            <div class="pull-left">
                                <VueImgInputer v-model="file" accept="image/*" size="small" @onChange="fileChange" placeholder="Send Image"></VueImgInputer>
                            </div>
                            <a class="pull-right btn btn-success" @click="replyConversation()" v-if="message !==''">
                                <i class="fa fa-telegram">
                                </i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <!--message_section-->
        </div>
    </div>
</div>
</template>

<script>
  import Push from 'push.js';
  import InfiniteLoading from 'vue-infinite-loading';
  import NewMessage from './NewMessage.vue';
  import Auth from '../../mixin/Auth.js';
  export default {
    name: 'chat',
    data(){
      return {
        message: '',
        keyword: '',
        file: null
      }
    },
    components: {
      InfiniteLoading,
      NewMessage
    },
    mixins: [Auth],
    computed :{
        conversations(){
          return this.$store.getters['conversations/allConversation'];
        },
        currentConversation() {
          return this.$store.getters['conversations/currentConversation'];
        },
        currentConversationId() {
          return this.$store.getters['conversations/currentConversationId'];
        }
      },
      created(){
        this.fetchConversations();
        this.updateConversation();
      },
      methods: {
        fetchConversations() {
          this.$store.dispatch('conversations/fetchConversations');
        },
        updateConversation() {
          var self = this;
          //if new message is belong to current conservation => push it
          socket.on('refresh message', function(message){
            if (message.conversationId === self.currentConversationId) {
              self.currentConversation.push(message);
            }
              self.$store.dispatch('conversations/fetchConversations');
          });
          // else updated snippet whenver new message
          socket.on('new message', function(data){
              self.$store.dispatch('conversations/fetchConversations');
          });
        },
        fetchConversationContent(conversationId){
          this.$store.dispatch('conversations/fetchConversationContent',{conversationId: conversationId});
        },
        replyConversation() {
          this.$store.dispatch('conversations/replyConversation',{conversationId: this.currentConversationId,message: this.message});
          this.fetchConversations();
          this.message = '';
        },
        searchConversation(){
          console.log(this.keyword);
        },
        deleteConversation(){
          var self = this;
          swal({
            title: 'Are you sure to delete this conversation',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then(function () {
            self.$store.dispatch('conversations/deleteConversation',{conversationId: self.currentConversationId});
            self.$store.dispatch('conversations/fetchConversations');
          })
        },
        createdNewConversation(payload){
          this.$store.dispatch('conversations/createConversation', payload);
          this.fetchConversations();
        },
         fileChange(file, name) {
            var data = new FormData();
            data.append('picture', file);
            this.$store.dispatch('conversations/replyConversationImage',{conversationId: this.currentConversationId,data: data});
            this.fetchConversations();
            this.file = null;
        }
      },
  }
</script>

<style lang="scss" scoped>
#custom-search-input {
  background: #e8e6e7 none repeat scroll 0 0;
  margin: 0;
  padding: 10px;
  .search-query {
    background: #fff none repeat scroll 0 0 !important;
    border-radius: 4px;
    height: 33px;
    margin-bottom: 0;
    padding-left: 7px;
    padding-right: 7px;
  }
  button {
    background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
    border: 0 none;
    border-radius: 3px;
    color: #666666;
    left: auto;
    margin-bottom: 0;
    margin-top: 7px;
    padding: 2px 5px;
    position: absolute;
    right: 0;
    z-index: 9999;
  }
}

.search-query:focus + button {
  z-index: 3;
}

.all_conversation {
  button {
    background: #f5f3f3 none repeat scroll 0 0;
    border: 1px solid #dddddd;
    height: 38px;
    text-align: left;
    width: 100%;
  }
  i {
    background: #e9e7e8 none repeat scroll 0 0;
    border-radius: 100px;
    color: #636363;
    font-size: 17px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    width: 30px;
  }
  .caret {
    bottom: 0;
    margin: auto;
    position: absolute;
    right: 15px;
    top: 0;
  }
  .dropdown-menu {
    background: #f5f3f3 none repeat scroll 0 0;
    border-radius: 0;
    margin-top: 0;
    padding: 0;
    width: 100%;
  }
  ul li {
    border-bottom: 1px solid #dddddd;
    line-height: normal;
    width: 100%;
    a {
      &:hover {
        background: #dddddd none repeat scroll 0 0;
        color: #333;
      }
      color: #333;
      line-height: 30px;
      padding: 3px 20px;
    }
  }
}

.member_list .chat-body {
  margin-left: 47px;
  margin-top: 0;
}

.top_nav {
  overflow: visible;
}

.member_list {
  .contact_sec {
    margin-top: 3px;
  }
  li {
    padding: 6px;
  }
  ul {
    border: 1px solid #dddddd;
  }
}

.chat-img img {
  height: 34px;
  width: 34px;
}

.member_list {
  li {
    border-bottom: 1px solid #dddddd;
    padding: 6px;
    &:last-child {
      border-bottom: none;
    }
  }
  height: 380px;
  overflow-x: hidden;
  overflow-y: auto;
}

.sub_menu_ {
  background: #e8e6e7 none repeat scroll 0 0;
  left: 100%;
  max-width: 233px;
  position: absolute;
  width: 100%;
  background: #f5f3f3 none repeat scroll 0 0;
  border: 1px solid rgba(0, 0, 0, 0.15);
  display: none;
  left: 100%;
  margin-left: 0;
  max-width: 233px;
  position: absolute;
  top: 0;
  width: 100%;
}

.all_conversation ul li:hover .sub_menu_ {
  display: block;
}

.new_message_head {
  button {
    background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
    border: medium none;
  }
  background: #f5f3f3 none repeat scroll 0 0;
  float: left;
  font-size: 13px;
  font-weight: 600;
  padding: 18px 10px;
  width: 100%;
}

.message_section {
  border: 1px solid #dddddd;
}

.chat_area {
  float: left;
  height: 300px;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
  li {
    padding: 14px 14px 0;
    .chat-img1 img {
      height: 40px;
      width: 40px;
    }
  }
  .chat-body1 {
    margin-left: 50px;
  }
}

.chat-body1 p {
  background: #fbf9fa none repeat scroll 0 0;
  padding: 10px;
}

.chat_area {
  .admin_chat .chat-body1 {
    margin-left: 0;
    margin-right: 50px;
  }
  li:last-child {
    padding-bottom: 10px;
  }
}

.message_write {
  background: #f5f3f3 none repeat scroll 0 0;
  float: left;
  padding: 15px;
  width: 100%;
  textarea.form-control {
    height: 70px;
    padding: 10px;
  }
}

.chat_bottom {
  float: left;
  margin-top: 13px;
  width: 100%;
}

.upload_btn {
  color: #777777;
}

.sub_menu_ > li {
  a {
    float: left;
    width: 100%;
  }
  float: left;
  width: 100%;
}

.member_list li:hover {
  background: #428bca none repeat scroll 0 0;
  color: #fff;
  cursor: pointer;
}
</style>