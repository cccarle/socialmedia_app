import React, { Component } from 'react'
import { View, Text, Picker, TextInput, TouchableOpacity } from 'react-native'
import { Header, Icon, Avatar, Button } from 'react-native-elements'
import _ from 'lodash'
import { Actions } from 'react-native-router-flux'
import { fetchProfileData, signOut, currentMood, descriptionTextChanged } from '../../actions'
import { connect } from 'react-redux'
import Modal from 'react-native-modal'
import { Spinner } from '../common'

import styles from './HeaderBlack.style'

class HeaderBlack extends Component {
  constructor () {
    super()
    this.state = {
      isModalVisible: false
    }
  }
  // Call fetchList to get access to the users

  componentWillMount () {
    this.props.fetchProfileData()
  }

  // toggle if to show modal or notx
  toggleModal () {
    this.setState({ isModalVisible: !this.state.isModalVisible })
    this.profile()
    this.props.fetchProfileData()
  }

  // Render editProfile Scene & Closes modal

  changeProfile () {
    Actions.editProfile()
    this.toggleModal()
  }

  // Render selectStatus Scene & Closes modal

  changeStatus () {
    Actions.selectStatus()
    this.toggleModal()
  }

  goToChatList () {
    Actions.chatList({ data: this.props.profile })
    this.toggleModal()
  }

  // Signs out the user, close modal and render Sign in Scene

  signOut () {
    Actions.login()
    this.toggleModal()
    this.props.signOut()
  }

  // Listen for changes in the descripotion text

  descriptionText (text) {
    this.props.descriptionTextChanged(text)
  }

  // Listen for changes in the current picker & updates the profile

  currentMood (value) {
    this.props.currentMood({prop: 'mood', value})
    this.props.fetchProfileData()
  }

  // When modal is true/visibal show this content

  profile () {
    if (this.state.isModalVisible === true) {
      return (
        <View style={{flexDirection: 'row', padding: 20, marginBottom: 10, marginTop: 10}}>
          <View style={styles.profileContainer}>
            <Avatar
              size={180}
              rounded
              source={{ uri: this.props.profile[0].profile_picture }}
              activeOpacity={0.7}
              avatarStyle={{ borderColor: 'white', borderWidth: 1 }}
          />
          </View>

          <View style={styles.profileDataContainer}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.profileDataSettings} >{this.props.profile[0].name} {this.props.profile[0].age}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.rightSideContainerProfile}
              onPress={() => this.changeProfile()}>
              <Text style={styles.editProfileText}>
              Edit Profile </Text>
              <Icon
                iconStyle={{ marginBottom: 10 }}
                containerStyle={{ marginBottom: 10 }}
                size={13}
                name='cog'
                type='font-awesome'
                color='#FFF'
            />
            </TouchableOpacity>
          </View>

        </View>

      )
    }
  }

  /*
  If the current user has no profile picture or it´s not yet loaded, render a spinner
  else render the profile picture as avatar in the header
  */

  renderHeader () {
    if (!this.props.profile[0] || this.props.profile[0] === undefined) {
      return <Header
        style={{ padding: 0 }}
        backgroundColor='#1E1E1E'
        outerContainerStyles={{ height: 120 }}
        leftComponent={<Spinner size='small' />}
        centerComponent={{ text: 'People Out Tonight ', style: { color: '#fff', fontFamily: 'GeosansLight', fontSize: 24 } }}
        rightComponent={{ icon: 'forum', color: '#fff' }}
      />
    } else {
      return <Header
        style={{ padding: 0 }}
        backgroundColor='#1E1E1E'
        outerContainerStyles={{ height: 120 }}
        leftComponent={<Avatar
          size='medium'
          rounded
          source={{ uri: this.props.profile[0].profile_picture }}
          onPress={this.toggleModal.bind(this)}
          avatarStyle={{ borderColor: 'white', borderWidth: 1 }}
        />}
        centerComponent={{ text: 'People Out Tonight ', style: { color: '#fff', fontFamily: 'GeosansLight', fontSize: 24 } }}
        rightComponent={
          <Icon
            name='forum'
            color='white'
            onPress={() => Actions.chatList({ data: this.props.profile })} />

        }
      />
    }
  }

   /*
  If the current user has no location or it´s not yet loaded, render a location icon
  else render the location.
  */

  renderLocation () {
    if (!this.props.profile[0] || this.props.profile[0] === undefined) {
      return (
        <View style={{ backgroundColor: 'rgba(52, 52, 52, 0.8)', borderBottomRightRadius: 11, borderTopRightRadius: 11, width: 107, justifyContent: 'center', alignItems: 'center' }}>
          <Icon
            name='place'
            type='place'
            color='#FFF'
            size={25}
            iconStyle={{ marginTop: 15 }}

          />
          <Text style={{ color: 'white', marginTop: 5, marginBottom: 15 }}> Location </Text>
        </View>
      )
    } else {
      return (
        <View style={{ backgroundColor: 'rgba(52, 52, 52, 0.8)', borderBottomRightRadius: 11, borderTopRightRadius: 11, width: 107, justifyContent: 'center', alignItems: 'center' }}>
          <Icon
            name='place'
            type='place'
            color='#FFF'
            size={25}
            iconStyle={{ marginTop: 15 }}
          />
          <Text style={{ color: 'white', marginTop: 5, marginBottom: 15, textAlign: 'center' }}> {this.props.profile[0].position} </Text>
        </View>
      )
    }
  }

   /*
  If the current user has no description text or it´s not yet loaded, render a default text
  else render the description text
  */

  renderDescritptionText () {
    if (!this.props.profile[0] || this.props.profile[0].descriptionText === undefined) {
      return (
        <View>
          <Text style={{ color: 'white', marginTop: 20, fontSize: 25, textAlign: 'center', fontFamily: 'GeosansLight', justifyContent: 'center', alignItems: 'center' }}>Description : </Text>
          <TextInput
            maxLength={40}
            placeholder='"Write something about yourself..."'
            placeholderTextColor='white'
            returnKeyType='done'
            onChangeText={this.descriptionText.bind(this)}
            style={{ color: 'white', marginTop: 20, fontSize: 20, textAlign: 'center', fontFamily: 'GeosansLight', justifyContent: 'center', alignItems: 'center' }}
          />
        </View>
      )
    } else {
      return (
        <View>
          <Text style={{ color: 'white', marginTop: 20, fontSize: 25, textAlign: 'center', fontFamily: 'GeosansLight', justifyContent: 'center', alignItems: 'center' }}>About {this.props.profile[0].name} : </Text>
          <TextInput
            maxLength={40}
            placeholderTextColor='white'
            returnKeyType='done'
            onChangeText={this.descriptionText.bind(this)}
            value={this.props.profile[0].descriptionText}
            style={{ color: 'white', marginTop: 20, fontSize: 20, textAlign: 'center', fontFamily: 'GeosansLight', justifyContent: 'center', alignItems: 'center' }}
          />
        </View>
      )
    }
  }

  renderMoodPicker () {
    if (!this.props.profile[0] || this.props.profile[0] === undefined) {
      return (
        <Spinner size='large' />
      )
    } else {
      return (
        <View style={styles.changeStatusButtonContainer}>

          <Text style={styles.currentMoodStyle} > Current Mood : </Text>
          <Picker
            selectedValue={this.props.profile[0].value}
            onValueChange={value => this.currentMood(value)}
            itemStyle={{ color: 'white', fontFamily: 'GeosansLight' }} style={{ height: 250, width: 230, marginTop: 25 }}>
            <Picker.Item label='💃 Dancing' value='💃 Dancing' />
            <Picker.Item label='🎶 Listening To Music' value='🎶 Listening To Music' />
            <Picker.Item label='🔥 Feeling On Fire' value='🔥 Feeling On Fire' />
            <Picker.Item label='😴 Feeling Tired' value='😴 Feeling Tired' />
            <Picker.Item label='🤪 Feeling Crazy' value='🤪 Feeling Crazy' />
            <Picker.Item label='🤔 Feeling Confused' value='🤔 Feeling Confused' />
            <Picker.Item label='🍻 Drinking Beer' value='🍻 Drinking Beer' />
            <Picker.Item label='🍷 Drinking Wine' value='🍷 Drinking Wine' />
            <Picker.Item label='🍕 Pizza Time' value='🍕 Pizza Time' />
          </Picker>
        </View>
      )
    }
  }

  render () {
    return (
      <View>
        <View>

          {/* Header */}
          {this.renderHeader()}

          <Modal isVisible={this.state.isModalVisible}
            onSwipe={() => this.setState({ isModalVisible: false })}
            swipeDirection='up'
            onSwipeThreshold={50}
            backdropOpacity={0.90}
            animationIn='slideInDown'
            animationInTiming={270}
          >
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <View>
                <Icon
                  name='clear'
                  type='clear'
                  color='#FFF'
                  onPress={this.toggleModal.bind(this)}
                />
              </View>

              <View style={{ position: 'absolute', right: 0, flexDirection: 'row'}}>
                <View>
                  <Button
                    raised
                    title='Sign Out'
                    titleStyle={{ fontFamily: 'GeosansLight', fontSize: 15, textAlign: 'center', justifyContent: 'center' }}
                    buttonStyle={{ backgroundColor: 'transparent'}}
                    onPress={this.signOut.bind(this)}
                  />
                </View>
              </View>
            </View>

            {/* Renders profile avatar-mood and location */}

            {this.profile()}

            <View style={styles.iconsInModal}>

              {/* Message icon - renders chatlist onPress */}

              <TouchableOpacity
                onPress={() => this.goToChatList()}
                style={{ backgroundColor: 'rgba(52, 52, 52, 0.8)', borderBottomLeftRadius: 11, borderTopLeftRadius: 11, width: 107, justifyContent: 'center', alignItems: 'center' }}>
                <Icon
                  name='message'
                  type='message'
                  color='#FFF'
                  size={25}
                  iconStyle={{ marginTop: 15 }}
                />
              />
              <Text style={{ color: 'white', marginTop: 4, marginBottom: 15 }}>Messages</Text>

              </TouchableOpacity>

              {/* Changes icon - renders selectStatus onPress */}
              <TouchableOpacity
                onPress={this.changeStatus.bind(this)}
                style={{ backgroundColor: 'rgba(52, 52, 52, 0.8)', width: 117, justifyContent: 'center', alignItems: 'center' }}>
                <Icon
                  name='replay'
                  type='replay'
                  color='#FFF'
                  size={25}
                />
                <Text onPress={this.changeStatus.bind(this)} style={{ color: 'white', marginTop: 5 }}> Change Status </Text>
              </TouchableOpacity>

              {/* Renders location */}

              {this.renderLocation()}
            </View>

            {/* Description Text */}
            <View style={{ backgroundColor: 'rgba(52, 52, 52, 0.8)', marginTop: 10, borderRadius: 11, height: 150 }}>
              {this.renderDescritptionText()}
            </View>

            {/* Mood Picker */}

            {this.renderMoodPicker()}

          </Modal>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  const profile = _.map(state.profile, (val) => {
    return { ...val }
  })

  const { moode } = state.moode

  return { profile, moode}
}

export default connect(mapStateToProps, { fetchProfileData, signOut, currentMood, descriptionTextChanged })(HeaderBlack)
