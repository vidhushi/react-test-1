import React, { Component } from 'react'
import { List, Label } from 'semantic-ui-react'

class OnlineList extends Component {
  render() {
    return (
      <List className="online-list">
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
    const itemStyle = {}
    return (
      <List.Item key={id}>
        <div
          className="online-list-item"
          style={{
            background: status === 'online' ? '#6BD761' : 'gray'
          }}
        />
        <Label color={"grey"}>
          {name}{' '}
        </Label>{' '}
      </List.Item>
    )
  }
}

export default OnlineList
