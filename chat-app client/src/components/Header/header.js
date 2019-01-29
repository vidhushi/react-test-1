import React, { Component } from 'react';
import { Header, Segment,Image } from 'semantic-ui-react'

class Myheader extends Component {

  
    render() {
        const hImage = {
            width: '60%'
           };

        return (
            <Segment clearing>
              <Header as='h2' floated='left'>
                <Image style={hImage} src='https://www.redcarpetup.com/static/logo-redcarpet.276f7ba9.svg' />
              </Header>
            </Segment>
        );
    }
}

export default Myheader;