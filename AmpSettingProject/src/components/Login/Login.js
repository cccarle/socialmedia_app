import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,

} from 'react-native';

import LoginForm from './LoginForm';

export default class Login extends Component {
  render(){
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <View style= {styles.logoContainer}>
      <Image
      style={styles.logo}
        source={require('../../images/logo.png')}
      />
      <Text style={styles.titleText}> Carl Ejnarsson @copyright</Text>
      </View>
      <View style = {styles.formConatiner}>
      <LoginForm />
      <TouchableOpacity style={styles.buttonContainer}>
    <Text style={styles.buttonText}>Skip Login</Text>
    </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#3498db',
    flex:1
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100
  },
  titleText: {
    color: '#FFF',
    marginTop: 10,
    opacity: 0.7
    //width:14

  }

});
