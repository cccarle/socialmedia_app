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
import { nameChanged, ageChanged, createProfiles, fetchProfileData } from '../../actions'
import _ from 'lodash'
import HeaderBlack from '../common/HeaderBlack'

import styles from './EditProfile.style'

class EditProfile extends Component {
  componentWillMount () {
    this.props.fetchProfileData()
  }

  onNameChange (text) {
    this.props.nameChanged(text)
  }

  onAgeChange (number) {
    this.props.ageChanged(number)
  }

  onButtonPress () {
    const {name, age} = this.props

    this.props.createProfiles({ name, age })
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
            placeholderTextColor='white'
            returnKeyType='next'
            keyboardType='email-address'
            value={this.props.name}
            onChangeText={this.onNameChange.bind(this)}
            style={styles.texts}
    />
          <View style={styles.hairline} />
          <TextInput
            returnKeyType='done'
            placeholder={this.props.profile[0].age}
            placeholderTextColor='white'
            keyboardType={'numeric'}
            value={this.props.age}
            onChangeText={this.onAgeChange.bind(this)}
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
    name: state.create.name,
    age: state.create.age,
    loading: state.create.loading,
    profile: profile
  }
}

export default connect(mapStateToProps, { nameChanged, ageChanged, createProfiles, fetchProfileData })(EditProfile)
