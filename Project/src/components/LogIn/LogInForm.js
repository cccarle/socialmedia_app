import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import { Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView,Keyboard } from 'react-native'
import { Spinner } from '../common'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, loginUser, deleteErrorMessage } from '../../actions'
import { Tile, Button, Icon} from 'react-native-elements'

// StyleSheet
import styles from './LogInForm.style'

class LogInForm extends Component {
    // when user write something, create a action creator
  onEmailChange (text) {
    this.props.emailChanged(text)
  }

  onPasswordChange (text) {
    this.props.passwordChanged(text)
  }

  // Try to log  in with email and password
  onButtonPress () {
    const {email, password} = this.props
    this.props.loginUser({email, password})
    Keyboard.dismiss()
  }

  // If auth fails, shows an error message
  renderError () {
    if (this.props.error) {
      return (
        <View>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      )
    }
  }

  renderRegisterScreen () {
    Actions.register()
    this.props.deleteErrorMessage()
  }

  // If the state is "loading" show the spinner, else show the button
  renderButton () {
    if (this.props.loading) {
      return <Spinner size='large' />
    }
    return (
      <Button
        icon={
          <Icon
            name='check-circle-outline'
            type='material-community'
            size={20}
            color='white'
/>
}
        title='Log In'
        titleStyle={{ fontFamily: 'GeosansLight'}}
        buttonStyle={{
          backgroundColor: '#D1AF46',
          //backgroundColor: '#2C4D69',
          width: 250,
          height: 40,
          marginLeft: 45,
          borderColor: 'transparent',
          borderWidth: 0,
          borderRadius: 5

        }}
        onPress={this.onButtonPress.bind(this)}
/>
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>

          <Tile
            imageSrc={require('../../assets/loginback2.jpg')}
            imageContainerStyle={{ }}
            title='Who´s Out?'
            activeOpacity={1}
            featured
            caption='Meet New People'
            captionStyle={{ fontFamily: 'GeosansLight'
            }}
            titleStyle={{fontFamily: 'Meatbuckets', fontSize: 55, justifyContent: 'center', alignItems: 'center'}}
            icon={{name: 'zoom-in', color: 'white', size: 50 }}
            height={1200}
/>

        </View>

        <KeyboardAvoidingView behavior='padding' style={styles.inputContainer}>

          <TextInput
            placeholder='Email'
            placeholderTextColor='white'
            returnKeyType='next'
            keyboardType='email-address'
            onChangeText={this.onEmailChange.bind(this)}
            style={styles.texts}
      />
          <View style={styles.hairline} />
          <TextInput
            placeholder='Password'
            placeholderTextColor='white'
            returnKeyType='go'
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
            secureTextEntry
            style={styles.texts}


      />
          <View style={styles.hairline} />
          <View style={{marginBottom:40}}>
          {this.renderError()}
          </View>
          <View style={styles.spinnerAndButton}>
            {this.renderButton()}
          </View>
        </KeyboardAvoidingView>

        <Text style={styles.descriptionText}

          onPress={this.renderRegisterScreen.bind(this)}
        >
        Not a account ? <Text style={{ textDecorationLine: 'underline'}}>Register here.</Text>
        </Text>
      </View>
    )
  }
}

// state to component
const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  }
}
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser, deleteErrorMessage })(LogInForm)

// connect the component to redux
// passes mapsettoprop and second the action creator
