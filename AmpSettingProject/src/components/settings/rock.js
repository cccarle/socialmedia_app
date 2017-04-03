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

class RockSetting extends React.Component {
  onButtonPress1(){
    this.props.navigator.push({
      id: 'Settings'
    });
  }
  render() {
    return (


      <View style={styles.backgroundColor}>
        <TouchableOpacity onPress={this.onButtonPress1.bind(this)}>
      <Text style={styles.headerText}>Back to the pre-made settings</Text>
      </TouchableOpacity>
        <Text style={styles.headerText}>Rock-Setting</Text>
          <Text style={styles.headerText}> Here is some text about RockSettings !</Text>

      </View>
    );
  }
}

//StyleSheet

const styles = StyleSheet.create({
  headerText:{
    textAlign: 'center',
    color: '#FFF',
    marginTop: 10,
    opacity: 0.7,
  },
  backgroundColor:{
    width: 380,
    height: 700,
    backgroundColor: '#3498db'
  }
})


module.exports = RockSetting;
