import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Avatar, Icon, Button } from 'react-native-elements'
import Modal from 'react-native-modal'
import { Actions } from 'react-native-router-flux'
import styles from './ListUserItem.style'
class ListUserItem extends Component {
  constructor () {
    super()
    this.state = {
      isModalVisible: false
    }
  }

  /*
  toggle if to show modal or not
  */

  toggleModal () {
    this.setState({ isModalVisible: !this.state.isModalVisible })
  }

  /*
  if there is no mood return empty text else return mood.
   */

  renderMood () {
    if (this.props.user.prop && this.props.user.value === undefined) {
      return <Text />
    } else {
      return (
        <Text>   {this.props.user.mood} {this.props.user.value} </Text>
      )
    }
  }

  /*
  Close modal & pass the selected users data
   */

  startchat () {
    this.toggleModal()

    Actions.chat({ data: this.props.user })
  }

  /*
   If there´s no profile picture or its loading render default icon
   else render profile picture
   */

  renderAvatarOrSpinner () {
    if (!this.props.user.profile_picture) {
      return <Avatar
        size='large'
        rounded
        onPress={() => console.log('Works!')}
        activeOpacity={0.7}
        icon={{ name: 'account', type: 'material-community', color: 'white', size: 40 }}
        avatarStyle={{ borderColor: '#302F30', borderWidth: 1 }}

      />
    } else {
      return <Avatar
        size='large'
        rounded
        source={{ uri: this.props.user.profile_picture }}
        avatarStyle={{ borderColor: '#302F30', borderWidth: 1 }}
        activeOpacity={0.7}
      />
    }
  }

  /*
   Render Profile picture, name, age, current mood, and location.
    */

  profile () {
    if (this.state.isModalVisible === true) {
      return (
        <View style={{flexDirection: 'row', padding: 10}}>

          <View style={styles.profileContainer}>
            <Avatar
              size={180}
              rounded
              source={{ uri: this.props.user.profile_picture }}
              activeOpacity={0.7}
              avatarStyle={{ borderColor: '#302F30', borderWidth: 1 }}
          />
          </View>

          <View style={styles.profileDataContainer}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.profileDataSettings} >{this.props.user.name} {this.props.user.age}</Text>
            </View>

            <View style={styles.profileDataPosition}>
              <Text style={styles.profileDataSettings2} >
                {this.props.user.position}
              </Text>
            </View>

            <View style={styles.editProfileDataSettingsContainer}>
              <Text style={styles.editProfileDataSettings}>{this.props.user.value} </Text>
            </View>

          </View>
        </View>

      )
    }
  }

   /*
  If the current user has no description text default text
  else render the users name and description text
  */

  renderDescriptionText () {
    if (this.props.user.descriptionText === undefined) {
      return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.text4}>About {this.props.user.name}</Text>

          <Text style={styles.text3}>
            "{this.props.user.name} has not yet done any description"
            </Text>
        </View>
      )
    } else {
      return (
        <View style={{ justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.text4}>About {this.props.user.name}</Text>
          <Text style={styles.text3}>
            "{this.props.user.descriptionText}"
          </Text>
        </View>
      )
    }
  }

  render (user) {
    return (
      <View>
        <TouchableOpacity onPress={this.toggleModal.bind(this)} style={styles.container}>
          {this.renderAvatarOrSpinner()}
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              {this.props.user.name} {this.props.user.age}
            </Text>
          </View>

          <View style={styles.textContainer2}>
            <Text style={styles.text}>
              {this.renderMood()}
            </Text>
          </View>
        </TouchableOpacity>

        <Modal isVisible={this.state.isModalVisible}
          onSwipe={() => this.setState({ isModalVisible: false })}
          swipeDirection='up'
          onSwipeThreshold={50}
          backdropOpacity={0.90}
          animationIn='slideInDown'
          animationInTiming={270}
        >

          <View >
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.exitModalIcon}>
                <Icon
                  name='clear'
                  type='clear'
                  color='#FFF'
                  onPress={this.toggleModal.bind(this)}
                />
              </View>
            </View>

              {this.profile()}

            <View style={{
              height: 250,
              marginBottom: 70,
              marginTop: 60,
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(52, 52, 52, 0.8)',
              borderRadius: 11
            }}>

              <Text style={styles.text3}>
                {this.renderDescriptionText()}
              </Text>

            </View>
            <View style={{ marginLeft: 20 }}>

              <View style={styles.changeStatusButtonContainer} >

                <Button
                  icon={
                    <Icon
                      name='message-plus'
                      type='material-community'
                      size={20}
                      color='white'
                    />
                  }
                  title='Send a message'
                  titleStyle={{ fontFamily: 'GeosansLight' }}
                  onPress={this.startchat.bind(this)}
                  buttonStyle={{
                    backgroundColor: '#D1AF46',
                    width: 300,
                    height: 45,
                    borderColor: 'transparent',
                    borderWidth: 0,
                    borderRadius: 5
                  }}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}

export default ListUserItem
