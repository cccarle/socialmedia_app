import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Card, CardSection, Input, Button, Spinner } from './common'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, loginUser } from '../actions'

class LogInForm extends Component {
    // when user write something, create a action creator
  onEmailChange (text) {
    this.props.emailChanged(text)
    console.log(this.props.email)
  }

  onPasswordChange (text) {
    this.props.passwordChanged(text)
    console.log(this.props.password)
  }

  onButtonPress () {
    const {email, password} = this.props
    this.props.loginUser({email, password})
  }

  renderError () {
    if (this.props.error) {
      return (
        <View style={{backgroundColor: 'white'}}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      )
    }
  }

  renderButton () {
    if (this.props.loading) {
      return <Spinner size='large' />
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log In
      </Button>
    )
  }

  render () {
    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            placeholder='test@gmail.com'
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
            />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label='Password'
            placeholder='password1234'
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
        />
        </CardSection>

        {this.renderError()}

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
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

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LogInForm)

// connect the component to redux
// passes mapsettoprop and second the action creator
