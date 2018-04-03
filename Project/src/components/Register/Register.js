import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native'
import { Spinner } from '../common'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, registerUser } from '../../actions'

import styles from './Register.style'

class Register extends Component {
  // when user write something, create a action creator
  onEmailChange (text) {
    this.props.emailChanged(text)
    console.log(this.props.email)
  }

  onPasswordChange (text) {
    this.props.passwordChanged(text)
    console.log(this.props.password)
  }

  // Try to log  in with email and password
  onButtonPress () {
    const {email, password} = this.props
    this.props.registerUser({email, password})
  }

  // If auth fails, shows an error message
  renderError () {
    if (this.props.error) {
      return (
        <View style={{backgroundColor: 'black'}}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      )
    }
  }

  renderLogInScreen () {
    Actions.login()
  }
  // If the state is "loading" show the spinner, else show the button
  renderButton () {
    if (this.props.loading) {
      return <Spinner size='large' />
    }
    return (
      <TouchableOpacity onPress={this.onButtonPress.bind(this)} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
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
          <Text style={styles.HeadText}>
          Register.
      </Text>
        </View>
        <View style={{ marginBottom: 90 }}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder='Email'
              placeholderTextColor='white'
              returnKeyType='next'
              keyboardType='email-address'
              value={this.props.email}
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
            {this.renderError()}
          </View>
          <View style={styles.spinnerAndButton}>
            {this.renderButton()}

          </View>
          <Text style={styles.descriptionText}
            onPress={this.renderLogInScreen.bind(this)}
          >
        Already have a account ? Sign in here.
        </Text>
        </View>
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
export default connect(mapStateToProps, { emailChanged, passwordChanged, registerUser })(Register)
