import React, { Component } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native';
import io from 'socket.io-client';

class MyChatApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      messageText: '',
    };
    this.socket = io('http://localhost:19000'); // Replace with your server URL
  }

  componentDidMount() {
    // Handle events from the server
    this.socket.on('chat message', (msg) => {
        console.log(msg)
      this.setState((prevState) => ({
        messages: [...prevState.messages, msg],
        
      }));
      
    });
    this.socket.on('error', (error) => {
        console.error('Socket.io error:', error);
      });
  }

  // Emit events to the server
  sendMessage = () => {
    if (this.state.messageText) {
      this.socket.emit('chat message', this.state.messageText);
      this.setState({ messageText: '' });
    }
  };
  
  render() {
    return (
        
<View style={{ flex: 1 , position: "relative", top: 200}}>
    
<FlatList
  data={this.state.messages}
  renderItem={() => (
    <View style={{width:400, backgroundColor: 'black' }}>
      <Text style={{ fontSize: 160, color: 'white' }}>hello</Text>
    </View>
  )}
  
/>

        <View style={{ flexDirection: 'row', alignItems: 'center' , position: "relative", top: 100}}>
          <TextInput
            style={{ flex: 1, borderColor: 'black', borderWidth: 10, padding: 10 }}
            value={this.state.messageText}
            onChangeText={(text) => this.setState({ messageText: text })}
          />
          <Button title={this.state.messagesText} onPress={this.sendMessage} />
        </View>
      </View>
        
      
    );
  }
}

export default MyChatApp;
