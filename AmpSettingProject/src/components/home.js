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
 class HomeScreen extends Component {
   onButtonPress(){
     this.props.navigator.push({
       id: 'Settings'
     });
   }
   
  render() {
    return (
      <View style={styles.box}>
      <View style={styles.backgroundColor}>
      <TouchableOpacity onPress={this.onButtonPress.bind(this)}>
    <Text style={styles.buttonText}>Choose settings</Text>
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
  borderColor: 'black',
  flexDirection: 'row',
  //height: 100,
  padding: 2
}
});

module.exports = HomeScreen;
