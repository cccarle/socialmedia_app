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

// Homescreen after login
 class CreateSettings extends Component {
   onButtonPress1(){
     this.props.navigator.push({
       id: 'HomeScreen'
     });
   }

  render() {
    return (
      <View style={styles.box}>
      <View style={styles.backgroundColor}>
      <TouchableOpacity>
    <Text style={styles.buttonText}>Let´s create settings</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={this.onButtonPress1.bind(this)}>
  <Text style={styles.buttonText}>Back</Text>
  </TouchableOpacity>
  </View>
      </View>
    );
  }
}

// Stylesheet
const styles = StyleSheet.create({
  headerText: {
    color: 'black',
    fontSize: 40,
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
  flexDirection: 'row',
  //height: 100,
}
});

module.exports = CreateSettings;
