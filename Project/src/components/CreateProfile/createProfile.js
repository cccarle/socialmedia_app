import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView
} from 'react-native'
import { Tile, Button, Icon } from 'react-native-elements'
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

  onButtonPress () {
    const {name, age} = this.props
    this.props.createProfiles({ name, age })
  }

  renderButton () {
    if (this.props.loading) {
      return <Spinner size='large' />
    }
    return (
      <Button
        icon={
          <Icon
            name='account-plus'
            type='material-community'
            size={20}
            color='white'
/>
}
        title='Register'
        titleStyle={{ fontFamily: 'GeosansLight'}}
        buttonStyle={{
          backgroundColor: '#D1AF46',
        // backgroundColor: '#2C4D69',
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

        <View style={styles.backgroundTile}>
          <Tile
            imageSrc={require('../../assets/thihi.png')}
            imageContainerStyle={{ }}
            activeOpacity={1}
            title='Create Profile'
            featured
            caption='Click on the image for uploading a profile picture'
            captionStyle={{ fontFamily: 'GeosansLight' }}
            titleStyle={styles.titleStyles}
            height={1330}
          />

        </View>
        <View style={styles.uploadImageContainer} >
          <ProfilePictureHandeler />
        </View>
        <KeyboardAvoidingView behavior='padding' style={styles.inputContainer}>

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
            returnKeyType='done'
            placeholder='Age'
            placeholderTextColor='white'
            keyboardType={'numeric'}
            value={this.props.age}
            onChangeText={this.onAgeChange.bind(this)}
            style={styles.texts}

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
  return {
    name: state.create.name,
    age: state.create.age,
    loading: state.create.loading
  }
}

export default connect(mapStateToProps, { nameChanged, ageChanged, createProfiles })(createProfile)
