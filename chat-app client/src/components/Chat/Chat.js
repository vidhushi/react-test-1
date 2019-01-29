import React, { Component } from 'react';
import { ChatManager, TokenProvider } from '@pusher/chatkit'
import MessageList from '../MessageList/MessageList'
import SendMessageForm from '../MessageForm/SendMessageForm'
import OnlineList from '../OnlineList/OnlineList'
import { Grid, Image } from 'semantic-ui-react'

class Chat extends Component {
    state = {
        currentUser: null,
        currentRoom: {},
        messages: []
    }

    componentDidMount() {
        const chatkit = new ChatManager({
          instanceLocator: 'v1:us1:e523e159-9aa4-4f79-9e9b-34adbcc1d9b6',
          userId: this.props.currentId,
          tokenProvider: new TokenProvider({
            url:
              'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/e523e159-9aa4-4f79-9e9b-34adbcc1d9b6/token'
          })
        })
    
        chatkit
          .connect()
          .then(currentUser => {
            this.setState({ currentUser })
            return currentUser.subscribeToRoom({
                      roomId: 25941255, // Replace with YOUR ROOM ID
                      messageLimit: 100,
                      hooks: {
                        onNewMessage: message => {
                          this.setState({
                           messages: [...this.state.messages, message]
                        })
                      }
                    },
                    onUserCameOnline: () => this.forceUpdate(),
                    onUserWentOffline: () => this.forceUpdate(),
                    onUserJoined: () => this.forceUpdate()
                  })
                })
                .then(currentRoom => {
                  this.setState({ currentRoom })
                 })
          .catch(error => console.error('error', error))
      }

      onSend = text => {
           this.state.currentUser.sendMessage({
             text,
             roomId: this.state.currentRoom.id
           })
         }

    render() {
        
        return (
          <Grid divided>
              <Grid.Row style={{marginLeft:'1%'}}>
                  <Grid.Column width={3} textAlign='center'>
                      <OnlineList
                        currentUser={this.state.currentUser}
                        users={this.state.currentRoom.users}
                      />
                  </Grid.Column>
                  <Grid.Column width={12}>
                      <MessageList messages={this.state.messages} />
                      <SendMessageForm onSend={this.onSend} />
                  </Grid.Column>
                </Grid.Row>
          </Grid>
        );
    }
}

export default Chat;