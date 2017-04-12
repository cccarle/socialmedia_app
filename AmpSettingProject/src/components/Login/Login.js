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

import { firebaseRef } from '../regUser/firebase';


// importing the form for the username & password
import LoginForm from './LoginForm';

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
    constructor(propss){
        super(propss)

        this.state = {
            email:'',
            password:'',
            status: ''
        }

        this._loginForm = this._loginForm.bind(this)
    }



    _loginForm(){
        firebaseRef.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
            console.log(error.code);
            console.log(error.message);
        })
        this.props.navigator.push({
            id: 'HomeScreen',
        });

    }
    render(){
        return (
            <View style= {styles.container}>
    <TextInput
        placeholder='username or email'
        placeholderTextColor='rgba(255,255,255,0.3)'
        returnKeyType='next'
        onChangeText={(text)=> this.setState({email: text})}
        value={this.state.email}
        onSubmmitEditing={()=> this.passwordInput.focus()}
        keyboardType='email-address'
        style={styles.input}
    />
    <TextInput
        placeholder='Password'
        onChangeText={(text)=> this.setState({password: text})}
        value={this.state.password}
        placeholderTextColor='rgba(255,255,255,0.3)'
        returnKeyType='go'
        secureTextEntry
        style={styles.input}
        ref={(input) => this.passwordInput = input}
    />
    <TouchableOpacity  onPress={this._loginForm} style={styles.buttonContainer}>
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
        backgroundColor: 'red'
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.3)',
        marginBottom: 10,
        color: '#5c8dff',
        paddingHorizontal:10
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15

    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'

    }
})
