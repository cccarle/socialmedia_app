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


// Create first react Component
// first page
class Settings extends React.Component {
  onButtonPress1(){
    this.props.navigator.push({
      id: 'RockSetting'
    });
  }
  onButtonPress2(){
    this.props.navigator.push({
      id: 'BluesSetting'
    });
  }
  onButtonPress3(){
    this.props.navigator.push({
      id: 'PopSetting'
    });
  }
  onButtonPress4(){
    this.props.navigator.push({
      id: 'JazzSetting'
    });
  }
  onButtonPress4(){
    this.props.navigator.push({
      id: 'HomeScreen'
    });
  }
  render() {
    return (
      <View style={styles.backgroundColor}>
        <Text style={styles.headerText}>Settings</Text>
          <TouchableOpacity onPress={this.onButtonPress4.bind(this)}>
        <Text style={styles.buttonText}>Back to ChooseSetting</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onButtonPress1.bind(this)}>
      <Text style={styles.buttonText}>RockSetting</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.onButtonPress2.bind(this)}>
    <Text style={styles.buttonText}>BluesSetting</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={this.onButtonPress3.bind(this)}>
  <Text style={styles.buttonText}>PopSetting</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={this.onButtonPress4.bind(this)}>
<Text style={styles.buttonText}>JazzSetting</Text>
</TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  headerText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily:'Arial'
},
buttonText:{
  textAlign: 'center',
  color: '#FFF',
  marginTop: 10,
  opacity: 0.7,
},
backgroundColor:{
  width: 380,
  height: 700,
  backgroundColor: '#3498db'
},
box:{
  borderColor: 'black',
  flexDirection: 'row',
  //height: 100,
  padding: 2
}
});

module.exports = Settings;
