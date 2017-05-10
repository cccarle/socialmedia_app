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


class HomeScreen extends React.Component {
  onButtonPress1(){
      this.props.navigator.push({
          id: 'Settings',
      });
  }

    onButtonPress2(){
        this.props.navigator.push({
            id: 'CreateSettings',
        });
    }
    onButtonPress3(){
        this.props.navigator.push({
            id: 'MyFavoriteSettings',
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
  <TouchableOpacity onPress={this.onButtonPress1.bind(this)} style={styles.buttonContainer}>
  <Text style={styles.buttonText}>Choose Setting </Text>
      </TouchableOpacity>
      <View style={styles.hairline}/>
              <TouchableOpacity onPress={this.onButtonPress2.bind(this)} style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>Create New Setting </Text>
              </TouchableOpacity>
      <View style={styles.hairline}/>
              <TouchableOpacity onPress={this.onButtonPress3.bind(this)} style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>My Favorite Settings </Text>
              </TouchableOpacity>
              <View style={styles.hairline}/>



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

module.exports = HomeScreen;
