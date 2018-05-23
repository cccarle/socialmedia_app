import React, { Component } from 'react'
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  ImageBackground,
  Picker
} from 'react-native'
import { Button, Icon } from 'react-native-elements'
import { Spinner } from '../common'
import { connect } from 'react-redux'
import { nameChangedEdit, ageChangedEdit, updateProfile, updateProfileAge, updateProfileName, fetchProfileData, updateGender } from '../../actions'
import _ from 'lodash'
import { BlurView } from 'react-native-blur'
import { Actions } from 'react-native-router-flux'
import ProfilePictureHandeler from '../../utils/ProfilePictureHandeler'
import styles from './EditProfile.style'

class EditProfile extends Component {
   /*
  Fetches the current profile data
   */
  componentWillMount () {
    this.props.fetchProfileData()
  }

   /*
  Listen for changes for name in the text field
   */

  onNameChangeEdit (text) {
    this.props.nameChangedEdit(text)
  }

   /*
  Listen for changes for age in the text field
   */

  onAgeChangeEdit (number) {
    this.props.ageChangedEdit(number)
  }

   /*
  Updates the information - on conditions if only the name or the age is changeds.
   */
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

   /*
  If the stateis set to true, show spinner
  else show the button
   */
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
        titleStyle={{ fontFamily: 'GeosansLight' }}
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
        source={require('../../assets/darkgreenbackground.png')}
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

          <View style={styles.changeStatusButtonContainer}>

            <Text style={styles.currentMoodStyle} > Gender : </Text>
            <Picker
              style={{width: 150, height: 60 }}
              selectedValue={this.props.gender}
              onValueChange={gender => this.props.updateGender({ prop: 'gender', gender })}
              itemStyle={{ height: 50, fontSize: 20, color: 'white', fontFamily: 'GeosansLight' }}>
              <Picker.Item label='👫 Select in list' value='all' />
              <Picker.Item label='♀ Female' value='female' />
              <Picker.Item label='♂ ️Male' value='male' />
            </Picker>
          </View>

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

  const { gender } = state.gender

  return {
    name: state.edit.name,
    age: state.edit.age,
    loading: state.edit.loading,
    profile: profile,
    gender
  }
}

export default connect(mapStateToProps, { nameChangedEdit, ageChangedEdit, updateProfile, updateProfileAge, updateProfileName, updateGender, fetchProfileData })(EditProfile)
