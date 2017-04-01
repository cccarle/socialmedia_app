import React, { Component } from 'react';

// Importing varibels
import {
  StyleSheet,
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  Button,
  navigate
} from 'react-native';
// importing navigator to switch between pages

class RockSetting extends React.Component {
  onButtonPress(){
    this.props.navigator.push({
      id: ''
    });
  }
  render() {
    return (
    
    );
  }
}

const styles = StyleSheet.create({
  container:{
    width: 380,
    height: 700,
    backgroundColor: '#3498db'
  },
buttonText:{
  textAlign: 'center',
  color: '#FFF',
  marginTop: 10,
  opacity: 0.7,
}

});


module.exports = RockSetting;
