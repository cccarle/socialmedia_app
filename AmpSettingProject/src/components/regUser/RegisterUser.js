import React, { Component } from 'react';
//import { firebaseRef } from './src/components/Login/firebase';

import {
  StyleSheet,
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,

} from 'react-native';

// importing the form for the username & password
import RegisterForm from './registerForm';

export default class User extends Component {
// Function that refer to this & bind. Navigates to HomeScreen.
  onButtonPress(){
    this.props.navigator.push({
      id: ''
    });
  }
  render(){
    return (
      <View style={styles.ParentView}>
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <View style= {styles.logoContainer}>
      <Image
      style={styles.logo}
        source={require('../../images/logo.png')}
      />
    <Text style={styles.titleText}> Create new user to acess more functionalities. </Text>
      </View>
      <View style = {styles.formConatiner}>
      <RegisterForm />
      </View>
      </KeyboardAvoidingView>
      </View>
    );
  }
}




// StyleSheet
const styles = StyleSheet.create({

  ParentView: {
    backgroundColor:'red',
    flex:1
  },
  container: {
    backgroundColor:'#3498db',
    flex:1
  },
  logoContainer: {
    backgroundColor: '#ecf0f1',
    opacity: 0.9,
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100
  },
  titleText: {
    color: 'black',
    marginTop: 10,
    opacity: 0.7
    //width:14

  },
  formConatiner: {
    height: 210
  },


});

module.exports = User;
