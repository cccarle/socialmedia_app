// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   View,
//   Image,
//   Text,
//   TextInput,
//   TouchableOpacity
// } from 'react-native';
//
// import { Actions } from 'react-native-router-flux'
// import HomeScreen from '../home';
//
//
// var firebase = require("firebase");
//
// var config = {
//   apiKey: "AIzaSyDgQSNevIQuthf2xR4kYnm3CW5Dho_KZ64",
//   authDomain: "ampsettingproject-9356f.firebaseapp.com",
//   databaseURL: "https://ampsettingproject-9356f.firebaseio.com"
// };
//
// firebaseRef = firebase.initializeApp(config);
//
// // Form for Username & Password
// // secureTextEntry hiddes the users-input.
// // TouchableOpacity changes the layout when writing with keybord.
// export default class User extends Component {
// constructor(propss){
//   super(propss)
//
// this.state = {
//   email:'',
//   password:'',
//   status: ''
// }
//
// this._registerForm = this._registerForm.bind(this)
// }
//
// _registerForm(){
// firebaseRef.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
// console.log(error.code);
// console.log(error.message);
// })
// }
//
//   render(){
//     return (
//       <View style= {styles.container}>
//       <TextInput
//       placeholder='username or email'
//       placeholderTextColor='rgba(255,255,255,0.3)'
//       returnKeyType='next'
//       onChangeText={(text)=> this.setState({email: text})}
//       value={this.state.email}
//       onSubmmitEditing={()=> this.passwordInput.focus()}
//       keyboardType='email-address'
//       style={styles.input}
//       />
//       <TextInput
//       placeholder='Password'
//       onChangeText={(text)=> this.setState({password: text})}
//       value={this.state.password}
//       placeholderTextColor='rgba(255,255,255,0.3)'
//       returnKeyType='go'
//       secureTextEntry
//       style={styles.input}
//       ref={(input) => this.passwordInput = input}
//       />
//
//     <TouchableOpacity onPress={this._registerForm} style={styles.buttonContainer}>
// <Text style={styles.buttonText}>Create New User ! </Text>
// </TouchableOpacity>
//       </View>
//     );
//   }
// }
//
//
// // StyleSheet
// const styles = StyleSheet.create({
//   container: {
//     padding: 20
//   },
//   input: {
//     height: 40,
//     backgroundColor: 'rgba(255,255,255,0.3)',
//     marginBottom: 10,
//     color: '#FFF',
//     paddingHorizontal:10
//   },
//   buttonContainer: {
//     backgroundColor: '#2980b9',
//     paddingVertical: 15
//
//   },
//   buttonText: {
//     textAlign: 'center',
//     color: '#FFFFFF',
//     fontWeight: '700'
//
//   }
// })
