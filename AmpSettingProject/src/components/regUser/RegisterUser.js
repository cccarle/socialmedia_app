import React, { Component } from 'react';

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

class User extends React.Component {
  onButtonPress1(){
      this.props.navigator.push({
          id: 'Login',
      });
  }
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
          <View style= {styles.container}>
            <View style={{
     flex: 1,
     flexDirection: 'column',
     justifyContent: 'center',
     alignItems: 'center',
   }}>
     <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
     <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
     <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>
        <Text style={styles.text}>With a account you get acces to store share & upload your own settings</Text>

  <TextInput
      placeholder='email'
      placeholderTextColor='black'
      returnKeyType='next'
      onChangeText={(text)=> this.setState({email: text})}
      value={this.state.email}
      onSubmmitEditing={()=> this.passwordInput.focus()}
      keyboardType='email-address'
      style={styles.input}
  />
<View style={styles.hairline}/>
  <TextInput
      placeholder='password'
      placeholderTextColor='black'
      onChangeText={(text)=> this.setState({password: text})}
      value={this.state.password}
      returnKeyType='go'
      secureTextEntry
      style={styles.input}
      ref={(input) => this.passwordInput = input}
  />
  <View style={styles.hairline}/>

  <TouchableOpacity onPress={this._registerForm} style={styles.buttonContainer}>
  <Text style={styles.buttonText}>Create New User </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.onButtonPress1.bind(this)} style={styles.buttonContainer}>
  <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>

      </View>
  );
  }
}


// StyleSheet
const styles = StyleSheet.create({
  container: {
      padding: 20,
      backgroundColor: 'white',
      flex: 1,

  },
  input: {
      height: 40,
      backgroundColor: 'white',
      marginBottom: 10,
      color: 'black',
      paddingHorizontal:10,
      padding: 10,
        },
  buttonContainer: {
      backgroundColor: 'white',
      paddingVertical: 1,
      borderColor: 'black'
  },
  buttonText: {
      textAlign: 'center',
      color: 'black',
      fontWeight: '700',
      borderColor: 'black'

  },
  hairline:{
    height:1,
    backgroundColor:'black',
    marginBottom:40,
    marginLeft:10,
    marginRight:10
  },
  text:{
      flex: 0.2,
      justifyContent: 'center',
      alignItems: 'center',

  }
})

module.exports = User;