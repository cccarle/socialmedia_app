import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ImageBackground
} from 'react-native'
import { Tile, Avatar, Button, Icon, Header, Overlay} from 'react-native-elements'
import { Spinner } from '../common'
import { connect } from 'react-redux'
import { nameChangedEdit, ageChangedEdit, updateProfile, updateProfileAge, updateProfileName, fetchProfileData } from '../../actions'
import _ from 'lodash'
import { BlurView } from 'react-native-blur'

import styles from './EditProfile.style'
import { Actions } from 'react-native-router-flux'
import ProfilePictureHandeler from '../../utils/ProfilePictureHandeler'

class EditProfile extends Component {
  componentWillMount () {
    this.props.fetchProfileData()
  }

  onNameChangeEdit (text) {
    console.log(text)
    this.props.nameChangedEdit(text)
  }

  onAgeChangeEdit (number) {
    console.log(number)
    this.props.ageChangedEdit(number)
  }

  onButtonPress () {
    const {name, age} = this.props

    if (!this.props.age && !this.props.name) {
      Actions.goingOut()
    } else if (!this.props.age) {
      this.props.updateProfileName({name})
    } else if (!this.props.name) {
      this.props.updateProfileAge({ age })
    } else {
      Actions.goingOut()
    }
  }

  renderButton () {
    if (this.props.loading) {
      return <Spinner size='large' />
    }
    return (
      <Button
        icon={
          <Icon
            name='account-settings-variant'
            type='material-community'
            size={20}
            color='white'
/>
}
        title='Update Profile'
        titleStyle={{ fontFamily: 'GeosansLight'}}
        buttonStyle={{
          backgroundColor: '#D1AF46',
          width: 250,
          height: 40,
          marginLeft: 65,
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

      <ImageBackground
        source={require('../../assets/thihi.png')}
        style={styles.container}
       >
        <BlurView
          style={styles.absolute}
          blurType='dark'
          blurAmount={0.1}
        />

        <View style={{ justifyContent: 'center',
          alignItems: 'center',
          marginTop: 100 }}>
          <Text style={styles.titleStyles}>Edit Profile</Text>
        </View>

        <View style={styles.uploadImageContainer}>

          <ProfilePictureHandeler />

        </View>
        <KeyboardAvoidingView behavior='padding' style={styles.inputContainer}>
          <TextInput
            placeholder={this.props.profile[0].name}
            defaultValue={this.props.profile[0].name}
            placeholderTextColor='white'
            returnKeyType='next'
            value={this.props.name}
            keyboardType='email-address'
            onChangeText={this.onNameChangeEdit.bind(this)}
            style={styles.texts}
    />
          <View style={styles.hairline} />
          <TextInput
            returnKeyType='done'
            placeholder={this.props.profile[0].age}
            defaultValue={this.props.profile[0].age}
            placeholderTextColor='white'
            keyboardType={'numeric'}
            value={this.props.age}

            onChangeText={this.onAgeChangeEdit.bind(this)}
            style={styles.texts}l
    />
          <View style={styles.hairline} />
        </KeyboardAvoidingView>
        <View style={styles.spinnerAndButton}>
          {this.renderButton()}
        </View>
      </ImageBackground>
    )
  }
}

const mapStateToProps = state => {
  const profile = _.map(state.profile, (val) => {
    return {...val}
  })

  return {
    name: state.edit.name,
    age: state.edit.age,
    loading: state.edit.loading,
    profile: profile
  }
}

export default connect(mapStateToProps, { nameChangedEdit, ageChangedEdit, updateProfile, updateProfileAge, updateProfileName, fetchProfileData })(EditProfile)
