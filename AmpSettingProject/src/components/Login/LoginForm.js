import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,


} from 'react-native';

// Form for Username & Password
// secureTextEntry hiddes the users-input.
// TouchableOpacity changes the layout when writing with keybord.
export default class Login extends Component {
  render(){
    return (
      <View style= {styles.container}>
      <TextInput
      placeholder='username or email'
      placeholderTextColor='rgba(255,255,255,0.3)'
      returnKeyType='next'
      onSubmmitEditing={()=> this.passwordInput.focus()}
      keyboardType='email-address'
      secureTextEntry
      style={styles.input}
      />
      <TextInput
      placeholder='Password'
      placeholderTextColor='rgba(255,255,255,0.3)'
      returnKeyType='go'
      secureTextEntry
      style={styles.input}
      ref={(input) => this.passwordInput = input}
      />

      <TouchableOpacity style={styles.buttonContainer}>
<Text style={styles.buttonText}>LOGIN</Text>
</TouchableOpacity>
      </View>
    );
  }
}


// StyleSheet
const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginBottom: 10,
    color: '#FFF',
    paddingHorizontal:10
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15

  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'

  }
})
