import React, { Component } from 'react';
import { Container, Content, Toast, Button} from 'native-base';
import { firebaseRef } from '../regUser/firebase';
import FadeInView from '../animation/FadeInView';

import {
    StyleSheet,
    View,
    Image,
    Text,
    KeyboardAvoidingView,
    TouchableOpacity,
    TextInput,
    AsyncStorage,
    Animated,
    TouchableWithoutFeedback,
    Easing
} from 'react-native';

export default class Login extends Component {
  constructor(props){
      super(props)
      this.spinValue = new Animated.Value(0)


      this.state = {
          email:'',
          password:'',
          loading: false,
          showToast: false,
          animate: new Animated.Value(0),
          sucess:false,
      }
      this._loginForm = this._loginForm.bind(this)
      this.componentDidMount = this.componentDidMount.bind(this)
      this.spin = this.spin.bind(this)


  }

  componentDidMount () {
    this.spin()
  }

  spin () {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear
      }
    ).start(() => this.spin())
  }


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
                id: 'HomeScreenLoggedIn'
              });
      }).catch((error) =>
        {
              this.setState({
                loading: false
              });
              Toast.show({
                              text: ' Something went wrong !',
                              position: 'bottom',
                              buttonText: 'Okay'
                            });
    });
  }

    render(){

      const spin = this.spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
  })

        return (


            <View style= {styles.container}>
              <View style={styles.containers}>
          <Animated.Image
            style={{
              width: 227,
              height: 200,
              transform: [{rotate: spin}] }}
              source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}
          />
        </View>

     <FadeInView style={{width: 340, height: 70,}}>
     <View>
       <Text style={styles.HeadText}>
         Register a user to get full access to all functionallity
      </Text>
     </View>
   </FadeInView>


     <Container style={StyleSheet.flatten(styles.Container)}>
     </Container>
     <FadeInView style={{width: 340, height: 70,}}>

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
    <View style={styles.hairline}/>
    </FadeInView>

      <FadeInView style={{width: 340, height: 70,}}>

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


    <View style={styles.hairline}/>
    </FadeInView>

    <FadeInView style={{width: 340, height: 70,}}>

    <TouchableOpacity onPress={this._loginForm} style={styles.buttonContainer}>
    <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onButtonPress1.bind(this)} style={styles.buttonContainer}>
    <Text style={styles.buttonText}>Skip Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onButtonPress2.bind(this)} style={styles.buttonContainer}>
    <Text style={styles.buttonText}>Create User</Text>
        </TouchableOpacity>
      </FadeInView>

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
    containers:{
      flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
    HeadText:{
      textAlign: 'center',
      height: 40,
      backgroundColor: 'white',
      marginBottom: 10,
      color: 'black',
      paddingHorizontal:10,
      padding: 10,

    },
    Container:{
      height:1,
      flex:0.2
    }

});
