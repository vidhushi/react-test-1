import React, { Component } from 'react'
import { List, Label, Image } from 'semantic-ui-react'

class OnlineList extends Component {
  render() {
    return (
      <List divided verticalAlign='middle'>
          {this.props.users &&
            this.props.users.map((user, index) => {
              if (user.id === this.props.currentUser.id) {
                return this.renderItem(
                  `${user.name} (You)`,
                  user.id,
                  user.presence.state
                )
              }
              return this.renderItem(user.name, user.id, user.presence.state)
            })}
      </List>
    )
  }

  renderItem(name, id, status) {
    return (
      <List.Item key={id}>
        <List.Content floated='left'>
          <Image avatar src='https://react.semantic-ui.com/images/avatar/small/christian.jpg' />
          <List.Header> 
            {name}{' '}
          </List.Header>{' '}
        </List.Content>
        <List.Content verticalAlign='middle' floated='right' style={{
          paddingTop: '12%'
        }}>
          <div
            className="online-list-item"
            style={{
              background: status === 'online' ? '#6BD761' : 'gray',
            }}
          />
      </List.Content>
      </List.Item>
    )
  }
}

export default OnlineList
