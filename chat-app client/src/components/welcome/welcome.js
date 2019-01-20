import React, { Component } from 'react';
import { Input, Button, Grid, Header } from 'semantic-ui-react'

class Welcome extends Component {

  constructor() {
    super()
    this.state = {
      username: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.handleSubmit(this.state.username)
  }

  handleChange = e => {
    this.setState({ username: e.target.value })
  }


    render() {
        return (
            <div>   
              <Grid container >
                  <Grid.Row columns={1}>
                    <Grid.Column >   
                      <Header as='h3'>Enter your Name</Header> 
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row columns={2}>
                  <form onSubmit={this.handleSubmit}>
                    <Grid.Column width={3}>
                      <Input placeholder='Enter your Name' 
                      value={this.state.username}
                      onChange={this.handleChange} />
                    </Grid.Column>
                    <Grid.Column width={2}>
                      <Button primary type="submit">Join</Button>
                    </Grid.Column>
                    </form>
                  </Grid.Row>
              </Grid>
            </div>
        );
    }
}

export default Welcome;