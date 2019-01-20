import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react'

class Myheader extends Component {
    render() {
        return (
            <Segment clearing>
              <Header as='h2' floated='left'>
                App
              </Header>
            </Segment>
        );
    }
}

export default Myheader;