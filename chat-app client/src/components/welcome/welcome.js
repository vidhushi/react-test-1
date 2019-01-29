import React, { Component } from 'react';
import { Input, Button, Grid, Header } from 'semantic-ui-react'

class Welcome extends Component {

  constructor() {
    super()
    this.state = {
      username: ''
    }
  }

  handleOnJoin = e => {
    this.props.handleSubmit(this.state.username)
  }

  handleChange = e => {
    this.setState({ username: e.target.value })
  }


    render() {
      
      const CardCss={
          marginTop: '6%',
          width: 'calc(1127px + 2rem)!important',
          background: '#c9c7dc66',
          padding: '2%',
          borderRadius: '10px',
          boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
      }

        return (
            <div>   
              <Grid container style={CardCss}>
                  <Grid.Row columns={1}>
                    <Grid.Column >   
                      <Header as='h2' >Enter your Name</Header> 
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row columns={2}>
                    <Grid.Column width={3}>
                      <Input placeholder='Enter your Name' 
                      value={this.state.username}
                      onChange={this.handleChange} />
                    </Grid.Column>
                    <Grid.Column width={2}>
                      <Button onClick={this.handleOnJoin} primary type="submit">Join</Button>
                    </Grid.Column>
                  </Grid.Row>
              </Grid>
            </div>
        );
    }
}

export default Welcome;