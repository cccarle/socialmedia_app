import React, { Component } from 'react';
//import { firebaseRef } from './src/components/Login/firebase';

import {
  StyleSheet,
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput

} from 'react-native';

import { firebaseRef } from './firebase';

// importing the form for the username & password
import RegisterForm from './registerForm';

class User extends React.Component {
  constructor(propss){
    super(propss)

  this.state = {
    email:'',
    password:'',
    status: ''
  }

  this._registerForm = this._registerForm.bind(this)
  }

  _registerForm(){
  firebaseRef.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
  console.log(error.code);
  console.log(error.message);
  })
    this.props.navigator.push({
      id: 'HomeScreen',
    });
  }

    render(){
      return (
        <View style= {styles.backgrounds}>

        <View style= {styles.container}>
        <TextInput
        placeholder='username or email'
        placeholderTextColor='rgba(255,255,255,0.3)'
        returnKeyType='next'
        onChangeText={(text)=> this.setState({email: text})}
        value={this.state.email}
        onSubmmitEditing={()=> this.passwordInput.focus()}
        keyboardType='email-address'
        style={styles.input}
        />
        <TextInput
        placeholder='Password'
        onChangeText={(text)=> this.setState({password: text})}
        value={this.state.password}
        placeholderTextColor='rgba(255,255,255,0.3)'
        returnKeyType='go'
        secureTextEntry
        style={styles.input}
        ref={(input) => this.passwordInput = input}
        />

      <TouchableOpacity onPress={this._registerForm} style={styles.buttonContainer}>
  <Text style={styles.buttonText}>Create New User ! </Text>
  </TouchableOpacity>
        </View>
          </View>
      );
    }
  }


  // StyleSheet
  const styles = StyleSheet.create({
    backgrounds: {
      backgroundColor:'#3498db'
    },
    container: {
      backgroundColor: 'red',
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

module.exports = User;
