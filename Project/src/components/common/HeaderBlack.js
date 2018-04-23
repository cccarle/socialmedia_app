import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Header, Icon, Avatar, Button, Divider } from 'react-native-elements'
import _ from 'lodash'
import { Actions } from 'react-native-router-flux'
import { fetchProfileData, signOut } from '../../actions'
import { connect } from 'react-redux'
import Modal from 'react-native-modal'
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
  render () {
    return (
      <View>
        <View>
          <Modal isVisible={this.state.isModalVisible}
            onSwipe={() => this.setState({ isModalVisible: false })}
            swipeDirection='up'
            onSwipeThreshold={50}
            backdropOpacity={0.90}
          >
            <View style={{ flexDirection: 'row' }}>
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
              marginLeft: 5,
              marginTop: 10
            }}>
              <View>
                <Icon
                  name='message'
                  type='message'
                  color='#FFF'
                  size={50}

          />
                <Text style={{color: 'white', marginTop: 4}}>Message</Text>
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

            <View style={styles.changeStatusButtonContainer} />
          </Modal>
        </View>

        <Header
          style={{ padding: 0 }}
          backgroundColor='#1E1E1E'
          outerContainerStyles={{ height: 80 }}
          leftComponent={<Avatar
            small
            rounded
            // source={console.log(this.props.profile[0].profile_picture)}
            onPress={this.toggleModal.bind(this)}
  />}
          centerComponent={{ text: 'People Out Tonight ', style: { color: '#fff', fontFamily: 'GeosansLight', fontSize: 15 } }}
          rightComponent={{ icon: 'forum', color: '#fff' }}
  />
      </View>
    )
  }
}

const mapStateToProps = state => {
  const profile = _.map(state.profile, (val) => {
    return { ...val }
  })
  return { profile }
}

export default connect(mapStateToProps, { fetchProfileData, signOut })(HeaderBlack)
