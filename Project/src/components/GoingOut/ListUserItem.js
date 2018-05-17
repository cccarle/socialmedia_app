import React, {Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import { Avatar, Icon, Button} from 'react-native-elements'
import Modal from 'react-native-modal'
import { Actions } from 'react-native-router-flux'

class ListUserItem extends Component {
  constructor () {
    super()
    this.state = {
      isModalVisible: false
    }
  }

    // toggle if to show modal or not
  toggleModal () {
    this.setState({ isModalVisible: !this.state.isModalVisible })
  }

  renderMood () {
    if (this.props.user.prop && this.props.user.value === undefined) {
      return <Text />
    } else {
      return (
        <Text> {this.props.user.mood} {this.props.user.value} </Text>
      )
    }
  }

  startchat () {
    this.toggleModal()

    Actions.chat({data: this.props.user})
  }

  renderAvatarOrSpinner () {
    if (this.props.user.profile_picture) {
      return <Avatar
        size='large'
        rounded
        source={{uri: this.props.user.profile_picture}}
        avatarStyle={{borderColor: '#302F30', borderWidth: 1}}
        activeOpacity={0.7}
        onPress={this.toggleModal.bind(this)}
/>
    } else {
      return <Avatar
        size='large'
        rounded
        onPress={() => console.log('Works!')}
        activeOpacity={0.7}
        icon={{name: 'account', type: 'material-community', color: 'white', size: 40}}
        avatarStyle={{borderColor: '#302F30', borderWidth: 1}}

        />
    }
  }

  profile () {
    console.log(this.props.user)
    var i = 0
    if (this.state.isModalVisible === true) {
      return (

        <View style={styles.profileContainer}>
          <Avatar
            size={180}
            rounded
            source={{ uri: this.props.user.profile_picture }}
            activeOpacity={0.7}
            avatarStyle={{borderColor: '#302F30', borderWidth: 1}}
          />

          <View style={styles.profileDataContainer}>
            <Text style={styles.profileDataSettings} >{this.props.user.name} {this.props.user.age} </Text>
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
      )
    }
  }

  renderDescriptionText () {
    if (this.props.user.descriptionText === undefined) {
      return (
        <View style={{ justifyContent: 'center', alignItems: 'center'}}>
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
      <View style={{
        flex: 1
      }}>

        <View style={styles.container}>
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
        </View>

        <Modal isVisible={this.state.isModalVisible}
          onSwipe={() => this.setState({ isModalVisible: false })}
          swipeDirection='up'
          onSwipeThreshold={50}
          backdropOpacity={0.90}
          animationIn='slideInDown'
          animationInTiming={270}
          >
          <View style={{ flex: 1}}>
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

            <View style={styles.profileContainerInPlace}>
              {this.profile()}
            </View>

            <View style={{ height: 250,
              marginBottom: 60,
              marginTop: 60,
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#3A3A3A',
              borderRadius: 11
            }}>

              <Text style={styles.text3}>
                {this.renderDescriptionText()}
              </Text>

            </View>
            <View style={{ marginLeft: 20}}>

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
                  titleStyle={{ fontFamily: 'GeosansLight'}}
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

const styles = {
  container: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    right: 75
  },
  textContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'baseline',
    left: 230,
    top: 33
  },
  textContainer2: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'baseline',
    left: 215,
    top: 53
  },
  text: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'GeosansLight'
  },
  texts: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'GeosansLight',
    marginTop: 15
  },
  text3: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'GeosansLight'
  },
  text4: {
    color: 'white',
    fontSize: 35,
    fontFamily: 'GeosansLight',
    marginBottom: 10
  },
  profileContainer: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    right: 54
  },
  profileDataContainer:
  {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    left: 200,
    top: 70
  },
  profileDataSettings:
  {
    color: '#fff',
    fontFamily: 'GeosansLight',
    fontSize: 20
  },
  profileDataSettings2: {
    color: '#fff',
    fontFamily: 'GeosansLight',
    fontSize: 15
  },
  profileDataPosition: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    left: 200,
    top: 95
  },

  editProfileDataSettingsContainer:
  {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    left: 195,
    top: 112
  },
  editProfileDataSettings:
  {
    color: '#fff',
    fontFamily: 'GeosansLight',
    fontSize: 13
  },
  exitModalIcon:
  {
    marginTop: 18,
    marginRight: 312,
    width: 30,
    marginBottom: 80
  },
  profileContainerInPlace:
  {

    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 170
  },
  signOut:
  {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    left: 290,
    top: 25
  },
  changeStatusButtonContainer:
  {
    height: 40,
    width: 300,
    flexDirection: 'row'

  },
  buttonStyleChange:
  {
    borderRadius: 50,
    backgroundColor: '#0285A3',
    marginBottom: 10

  },
  currentMoodStyle:
  {
    color: 'white',
    fontFamily: 'GeosansLight',
    fontSize: 20,
    marginBottom: 85
  }
}

export default ListUserItem
