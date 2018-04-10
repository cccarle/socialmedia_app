import React, { Component } from 'react'
import firebase from 'firebase'
import {
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native'
import { Tile } from 'react-native-elements'
import { Spinner } from '../common'
import { connect } from 'react-redux'
import { nameChanged, ageChanged, createProfiles } from '../../actions'
import ProfilePictureHandeler from '../../utils/ProfilePictureHandeler'
import styles from './CreateProfile.style'

class createProfile extends Component {
  onNameChange (text) {
    this.props.nameChanged(text)
    console.log(this.props.name)
  }

  onAgeChange (number) {
    this.props.ageChanged(number)
    console.log(this.props.age)
  }

    // Create profile
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
        <Text style={styles.buttonText}>Create Profile</Text>
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
          alignItems: 'center',
          marginTop:10
        }}>

          <Tile
            imageSrc={require('../../assets/blurr.jpg')}
            imageContainerStyle={{ }}
            activeOpacity={1}
            title='What´s Your Name ?'
            featured
            caption='Click on the image for uploading a profile picture'
            captionStyle={{ fontFamily: 'GeosansLight'
            }}
            titleStyle={{fontFamily: 'Meatbuckets', fontSize: 55, justifyContent: 'center', alignItems: 'center'}}
            height={1330}
/>

        </View>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 60
        }} >
          <ProfilePictureHandeler />
        </View>
        <View style={styles.inputContainer}>

          <TextInput
            placeholder='Name'
            placeholderTextColor='white'
            returnKeyType='next'
            keyboardType='email-address'
            value={this.props.name}
            onChangeText={this.onNameChange.bind(this)}
            style={styles.texts}
    />
          <View style={styles.hairline} />
          <TextInput
            placeholder='Age'
            placeholderTextColor='white'
            returnKeyType='go'
            keyboardType={'numeric'}
            value={this.props.age}
            onChangeText={this.onAgeChange.bind(this)}
            style={styles.texts}

    />
          <View style={styles.hairline} />
        </View>
        <View style={styles.spinnerAndButton}>
          {this.renderButton()}
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    name: state.create.name,
    age: state.create.age,
    loading: state.create.loading
  }
}

export default connect(mapStateToProps, { nameChanged, ageChanged, createProfiles })(createProfile)
