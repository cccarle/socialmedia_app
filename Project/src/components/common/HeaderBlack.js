import React, { Component } from 'react'
import { View, Text, Picker } from 'react-native'
import { Header, Icon, Avatar, Button, Divider } from 'react-native-elements'
import _ from 'lodash'
import { Actions } from 'react-native-router-flux'
import { fetchProfileData, signOut, currentMood } from '../../actions'
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
// Signs out the user, close modal and render Sign in Scene
  signOut () {
    Actions.login()
    this.toggleModal()
    this.props.signOut()
  }

  // When modal is true/visibal show this content
  profile () {
    if (this.state.isModalVisible === true) {
      return (

        <View style={styles.profileContainer}>
          <Avatar
            height={180}
            rounded
            source={{ uri: this.props.profile[0].profile_picture }}
            activeOpacity={0.7}
            avatarStyle={{borderColor: '#302F30', borderWidth: 1}}
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
          medium
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
            onPress={() => Actions.chatList({ data: this.props.profile })} />

        }
/>
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

            <Divider style={{ backgroundColor: 'white'}} />

            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: 10,
              marginRight: 10,
              marginTop: 25
            }}>
              <View>
                <Icon
                  name='message'
                  type='message'
                  color='#FFF'
                  size={50}
          />
                <Text style={{color: 'white', marginTop: 4}}>Messages</Text>
              </View>

              <View >
                <Icon
                  name='replay'
                  type='replay'
                  color='#FFF'
                  size={50}
                  iconStyle={{marginLeft: 13}}
                  onPress={this.changeStatus.bind(this)}
          />
                <Text onPress={this.changeStatus.bind(this)} style={{color: 'white', marginTop: 5, marginLeft: 13}}> Change Status </Text>
              </View>

              <View>
                <Icon
                  name='place'
                  type='place'
                  color='#FFF'
                  size={50}
          />
                <Text style={{color: 'white', marginTop: 5}}> Oskarshamn </Text>
              </View>
            </View>
            <Divider style={{ backgroundColor: 'white', marginTop: 30}} />

            <View style={styles.changeStatusButtonContainer}>
              <Text style={styles.currentMoodStyle} > Current Mood : </Text>
              <Picker
                selectedValue={this.props.mood}
                onValueChange={value => this.props.currentMood({ prop: 'mood', value })}
                itemStyle={{color: 'white', fontFamily: 'GeosansLight' }} style={{ height: 300, width: 230 }}>
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

  return { profile, mood }
}

export default connect(mapStateToProps, { fetchProfileData, signOut, currentMood })(HeaderBlack)
