import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    KeyboardAvoidingView,
    TouchableOpacity,
    TextInput,
    AsyncStorage
} from 'react-native';



import { firebaseRef } from '../regUser/firebase';


export default class Login extends Component {
// Function that refer to this & bind. Navigates to HomeScreen.
    onButtonPress1(){
        this.props.navigator.push({
            id: 'HomeScreen',
        });
    }
    onButtonPress2(){
        this.props.navigator.push({
            id: 'User',
        });
    }
    constructor(props){
        super(props)

        this.state = {
            email:'',
            password:'',
            loading: false
        }

      this._loginForm = this._loginForm.bind(this)
    }

    _loginForm(){
      this.setState({
    loading: true
  });

        firebaseRef.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((userData) =>
      {
        this.setState({
                loading: false
              });
              AsyncStorage.setItem('userData', JSON.stringify(userData));
              console.log(userData);
              this.props.navigator.push({
                id: 'HomeScreen'
              });
      }).catch((error) =>
        {
              this.setState({
                loading: false
              });
        alert('Login Failed. Please try again'+error);
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
       <Text> Your Portabel Amp-setting-app 
       </Text>
     </View>
    <TextInput
        placeholder='email'
        placeholderTextColor='black'
        returnKeyType='next'
        onChangeText={(text)=> this.setState({email: text})}
        value={this.state.email}
        onSubmmitEditing={()=> this.passwordInput.focus()}
        keyboardType='email-address'
        style={styles.input}
    />
    <TextInput
        placeholder='password'
        placeholderTextColor='black'
        onChangeText={(text)=> this.setState({password: text})}
        value={this.state.password}
        returnKeyType='go'
        secureTextEntry
        style={styles.input}
        ref={(input) => this.passwordInput = input}
    />

    <TouchableOpacity onPress={this._loginForm} style={styles.buttonContainer}>
    <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onButtonPress1.bind(this)} style={styles.buttonContainer}>
    <Text style={styles.buttonText}>Skip Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onButtonPress2.bind(this)} style={styles.buttonContainer}>
    <Text style={styles.buttonText}>Create User</Text>
        </TouchableOpacity>
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
        borderWidth:0.8,
        borderColor:'black',
        color:'black'

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
    }
})
