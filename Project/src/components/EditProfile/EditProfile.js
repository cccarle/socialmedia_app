import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView
} from 'react-native'
import { Tile, Avatar, Button, Icon, Header} from 'react-native-elements'
import { Spinner } from '../common'
import { connect } from 'react-redux'
import { nameChangedEdit, ageChangedEdit, updateProfile, updateProfileAge, updateProfileName, fetchProfileData } from '../../actions'
import _ from 'lodash'

import styles from './EditProfile.style'
import { Actions } from 'react-native-router-flux'

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
    
    if (!this.props.name) {
      this.props.updateProfileAge({ age })
    } else if (!this.props.age) {
      this.props.updateProfileName({name})
    } else {
      this.props.updateProfile({name, age})
    }
  }

  renderButton () {
    if (this.props.loading) {
      return <Spinner size='large' />
    }
    return (
      <TouchableOpacity onPress={this.onButtonPress.bind(this)} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.backgroundTile}>
          <Tile
            imageSrc={require('../../assets/test.jpg')}
            imageContainerStyle={{ }}
            activeOpacity={1}
            title='Edit Profile'
            featured
            caption='Click on the image for selecting a new profile picture'
            captionStyle={{ fontFamily: 'GeosansLight' }}
            titleStyle={styles.titleStyles}
            height={1330}
/>

        </View>
        <View style={styles.uploadImageContainer}>

          <Avatar
            height={265}
            rounded
            source={{ uri: this.props.profile[0].profile_picture }}
            activeOpacity={0.7}
        />
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
      </View>
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
