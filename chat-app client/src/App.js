import React, { Component } from 'react';
import './App.css';
import Myheader from './components/Header/header'
import Welcome from './components/welcome/welcome'
import Chat from './components/Chat/Chat'

class App extends Component {

  state = {
    currentUsername: null,
    currentId: null,
    currentScreen: 'usernameForm'

  }

  onUsernameSubmitted = username => {
    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username })
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
          currentId: data.id,
          currentUsername: data.name,
          currentScreen: 'chat'
      })
    })
    .catch(error => {
      console.error('error', error)
    })
  }


  render() { 
  let screen=null; 
  if(this.state.currentScreen === 'usernameForm') {
    screen = <Welcome handleSubmit={this.onUsernameSubmitted} />
   }
   if (this.state.currentScreen === 'chat') {
     screen = <Chat currentId={this.state.currentId} />
   }

   return(
     <div>
        <Myheader></Myheader>
        {screen}
     </div>
   )
  }

}

export default App;
