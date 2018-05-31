import React, { Component } from 'react'
import {
  View,
  Picker,
  TextInput,
  KeyboardAvoidingView,
  Text,
  Keyboard
} from 'react-native'
import { Tile, Button, Icon } from 'react-native-elements'
import { Spinner } from '../common'
import { connect } from 'react-redux'
import { nameChanged, ageChanged, createProfiles, updateGender } from '../../actions'
import ProfilePictureHandeler from '../../utils/ProfilePictureHandeler'
import styles from './CreateProfile.style'

class createProfile extends Component {
  /*
  Listen for changes in the name text input
  */

  onNameChange (text) {
    this.props.nameChanged(text)
  }

  /*
  Listen for changes in the age text input
  */

  onAgeChange (number) {
    this.props.ageChanged(number)
  }

  /*
  When the button is press call createPRofiles with the name and the age
  Di smisses the keyboard.
  */

  onButtonPress () {
    const {name, age} = this.props
    this.props.createProfiles({ name, age})
    Keyboard.dismiss()
  }

  /*

  If the state is set to loading render spinner
  else render the button.
  */

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
        titleStyle={{ fontFamily: 'GeosansLight' }}
        buttonStyle={{
          backgroundColor: '#D1AF46',
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
            imageSrc={require('../../assets/darkgreenbackground.png')}
            imageContainerStyle={{ }}
            activeOpacity={1}
            title='Create Profile'
            featured
            caption='Click on the image for uploading a profile picture'
            captionStyle={{ fontFamily: 'GeosansLight' }}
            titleStyle={styles.titleStyles}
            height={1490}
          />

        </View>

        {/* Profile Picture */}

        <View style={styles.uploadImageContainer} >
          <ProfilePictureHandeler />
        </View>

        {/* Text inputs */}

        <KeyboardAvoidingView behavior='position'
          contentContainerStyle={{backgroundColor: 'black', height: 370}}
          style={styles.inputContainer}>

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

          {/* Gender Picker & Button/Spinner */}

          <View style={styles.changeStatusButtonContainer}>

            <Text style={styles.currentMoodStyle} > Select a gender : </Text>
            <Picker
              style={{width: 150, height: 80, marginBottom: 20}}
              selectedValue={this.props.gender}
              onValueChange={gender => this.props.updateGender({ prop: 'gender', gender })}
              itemStyle={{ height: 90, fontSize: 20, color: 'white', fontFamily: 'GeosansLight' }}>
              <Picker.Item label='👫 Select in list' value='all' />
              <Picker.Item label='♀ Female' value='female' />
              <Picker.Item label='♂ ️Male' value='male' />
            </Picker>
          </View>

          <View style={styles.spinnerAndButton}>
            {this.renderButton()}
          </View>

        </KeyboardAvoidingView>

      </View>
    )
  }
}

const mapStateToProps = state => {
  const { gender } = state.gender

  return {
    name: state.create.name,
    age: state.create.age,
    loading: state.create.loading,
    gender
  }
}

export default connect(mapStateToProps, { nameChanged, ageChanged, createProfiles, updateGender })(createProfile)
