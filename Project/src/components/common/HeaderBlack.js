import React, { Component } from 'react'
import { View, Text, Picker, TextInput, TouchableOpacity } from 'react-native'
import { Header, Icon, Avatar, Button, Divider } from 'react-native-elements'
import _ from 'lodash'
import { Actions } from 'react-native-router-flux'
import { fetchProfileData, signOut, currentMood, descriptionTextChanged} from '../../actions'
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

  // toggle if to show modal or not
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
    Actions.chatList({ data: this.props.profile})
    this.toggleModal()
  }
// Signs out the user, close modal and render Sign in Scene
  signOut () {
    Actions.login()
    this.toggleModal()
    this.props.signOut()
  }

  descriptionText (text) {
    this.props.descriptionTextChanged(text)
  }
  // When modal is true/visibal show this content
  profile () {
    if (this.state.isModalVisible === true) {
      return (

        <View style={styles.profileContainer}>
          <Avatar
            size={180}
            rounded
            source={{ uri: this.props.profile[0].profile_picture }}
            activeOpacity={0.7}
            avatarStyle={{borderColor: 'white', borderWidth: 1}}
          />

          <View style={styles.profileDataContainer}>
            <Text style={styles.profileDataSettings} >{this.props.profile[0].name} {this.props.profile[0].age} </Text>
          </View>

          <View style={styles.editProfileDataSettingsContainer}>
            <Text style={styles.editProfileDataSettings} onPress={this.changeProfile.bind(this)}> Edit Profile </Text>
            <Icon
              iconStyle={{ marginBottom: 10 }}
              containerStyle={{ marginBottom: 10 }}
              size={13}
              name='cog'
              type='font-awesome'
              color='#FFF'
              onPress={this.changeProfile.bind(this)}
            />
          </View>

        </View>
      )
    }
  }

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
          avatarStyle={{borderColor: 'white', borderWidth: 1}}
/>}
        centerComponent={{ text: 'People Out Tonight ', style: { color: '#fff', fontFamily: 'GeosansLight', fontSize: 24 } }}
        rightComponent={
          <Icon
            name='forum'
            color='white'
            onPress={() => Actions.chatList({ data: this.props.profile})} />

        }
/>
    }
  }

  renderLocation () {
    if (!this.props.profile[0] || this.props.profile[0] === undefined) {
      return (
        <View style={{backgroundColor: '#3A3A3A', borderBottomRightRadius: 11, borderTopRightRadius: 11, width: 107, justifyContent: 'center', alignItems: 'center'}}>
          <Icon
            name='place'
            type='place'
            color='#FFF'
            size={25}
            iconStyle={{marginTop: 15}}

/>
          <Text style={{color: 'white', marginTop: 5, marginBottom: 15}}> Location </Text>
        </View>
      )
    } else {
      return (
        <View style={{backgroundColor: '#3A3A3A', borderBottomRightRadius: 11, borderTopRightRadius: 11, width: 107, justifyContent: 'center', alignItems: 'center'}}>
          <Icon
            name='place'
            type='place'
            color='#FFF'
            size={25}
            iconStyle={{marginTop: 15}}

/>
          <Text style={{color: 'white', marginTop: 5, marginBottom: 15}}> {this.props.profile[0].position} </Text>
        </View>
      )
    }
  }

  renderDescritptionText () {
    if (!this.props.profile[0] || this.props.profile[0].descriptionText === undefined) {
      return (
        <View>
          <Text style={{color: 'white', marginTop: 20, fontSize: 25, textAlign: 'center', fontFamily: 'GeosansLight', justifyContent: 'center', alignItems: 'center'}}>Description : </Text>
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
          <Text style={{ color: 'white', marginTop: 20, fontSize: 25, textAlign: 'center', fontFamily: 'GeosansLight', justifyContent: 'center', alignItems: 'center'}}>About {this.props.profile[0].name} : </Text>
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

  render (profile) {
    return (
      <View>
        <View>
          <Modal isVisible={this.state.isModalVisible}
            onSwipe={() => this.setState({ isModalVisible: false })}
            swipeDirection='up'
            onSwipeThreshold={50}
            backdropOpacity={0.90}
            animationIn='slideInDown'
            animationInTiming={270}
          >
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <View style={styles.exitModalIcon}>
                <Icon
                  name='clear'
                  type='clear'
                  color='#FFF'
                  onPress={this.toggleModal.bind(this)}
                />
              </View>

              <View style={styles.signOut}>
                <Text style={styles.editProfileDataSettings} onPress={this.signOut.bind(this)}>Sign Out</Text>
              </View>
            </View>
            <View style={styles.profileContainerInPlace}>
              {this.profile()}
            </View>

            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: 0,
              marginRight: 0,
              marginTop: 5
            }}>
              <TouchableOpacity
                onPress={() => this.goToChatList()}
                style={{backgroundColor: '#3A3A3A', borderBottomLeftRadius: 11, borderTopLeftRadius: 11, width: 107, justifyContent: 'center', alignItems: 'center'}}>
                <Icon
                  name='message'
                  type='message'
                  color='#FFF'
                  size={25}
                  iconStyle={{marginTop: 15}}
                  />

          />
                <Text style={{color: 'white', marginTop: 4, marginBottom: 15}}>Messages</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={this.changeStatus.bind(this)}
                style={{backgroundColor: '#3A3A3A', width: 117, justifyContent: 'center', alignItems: 'center'}}>

                <Icon
                  name='replay'
                  type='replay'
                  color='#FFF'
                  size={25}

          />
                <Text onPress={this.changeStatus.bind(this)} style={{color: 'white', marginTop: 5}}> Change Status </Text>
              </TouchableOpacity>

              {this.renderLocation()}
            </View>

            <View style={{backgroundColor: '#3A3A3A', marginTop: 10, borderRadius: 11, height: 150}}>
              {this.renderDescritptionText()}
            </View>

            <View style={styles.changeStatusButtonContainer}>
              <Text style={styles.currentMoodStyle} > Current Mood : </Text>
              <Picker
                selectedValue={this.props.mood}
                onValueChange={value => this.props.currentMood({ prop: 'mood', value })}
                itemStyle={{color: 'white', fontFamily: 'GeosansLight' }} style={{ height: 250, width: 230,marginTop:25 }}>
                <Picker.Item label='💃 Dancing' value=' 💃 Dancing' />
                <Picker.Item label='🎶 Listening To Music' value=' 🎶 Listening To Music' />
                <Picker.Item label='🔥 Feeling On Fire' value=' 🔥 Feeling On Fire' />
                <Picker.Item label='😴 Feeling Tired' value=' 😴 Feeling Tired' />
                <Picker.Item label='🤪 Feeling Crazy' value=' 🤪 Feeling Crazy' />
                <Picker.Item label='🤔 Feeling Confused' value=' 🤔 Feeling Confused' />
                <Picker.Item label='🍻 Drinking Beer' value=' 🍻 Drinking Beer' />
                <Picker.Item label='🍷 Drinking Wine' value=' 🍷 Drinking Wine' />
                <Picker.Item label='🍕 Pizza Time' value=' 🍕 Pizza Time' />
              </Picker>
            </View>
          </Modal>

          {this.renderHeader()}

        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  const profile = _.map(state.profile, (val) => {
    return { ...val }
  })

  const { mood } = state.moode

  return { profile, mood}
}

export default connect(mapStateToProps, { fetchProfileData, signOut, currentMood, descriptionTextChanged })(HeaderBlack)
