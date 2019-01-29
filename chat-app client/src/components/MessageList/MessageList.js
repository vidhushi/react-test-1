import React, { Component } from 'react';
import { List, Image } from 'semantic-ui-react'

class MessageList extends Component {

  renderItem(message){
    const messageStyle={
      padding: '1%',
      border: '1px solid #0000000d',
      background: '#1088f730',
      borderRadius: '2%',
      marginBottom: '1%',
    }
    return (
      <List.Item key={message.id} style={messageStyle}>
        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/christian.jpg' />
        <List.Content>
          <List.Header as='a'>{message.sender.name}</List.Header>
          <List.Description>{message.text}</List.Description>
        </List.Content>
      </List.Item>
    )
  }

    render() {
        return (
          <List>
            {this.props.messages.map((message, index) =>
              this.renderItem(message)
            )}
          </List>
        );
    }
}



export default MessageList;