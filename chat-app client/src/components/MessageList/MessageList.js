import React, { Component } from 'react';
import { List, Image } from 'semantic-ui-react'

class MessageList extends Component {

  renderItem(message){
    return (
      <List.Item key={message.id}>
        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
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