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

class JazzSetting extends React.Component {
  render() {
    return (
      <View style={styles.backgroundColor}>
        <Text style={styles.headerText}>JazzSetting</Text>
        <Text style={styles.headerText}> hej ooiajsdiojas djasiodj asoijd i</Text>
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


module.exports = JazzSetting;
