import React, {Component } from 'react'
import { View, Text } from 'react-native'
import { Avatar, Icon, Button} from 'react-native-elements'
import Modal from 'react-native-modal'
import { Actions } from 'react-native-router-flux'
import Chat from '../Chatt/Chat'
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

  startchat1 () {
    this.toggleModal()

    Actions.chat({ data: this.props.user, text: ' My doctor says i’m lacking vitamin U !' })
  }

  renderAvatarOrSpinner () {
    if (this.props.user.profile_picture) {
      return <Avatar
        large
        rounded
        source={{uri: this.props.user.profile_picture}}
        avatarStyle={{borderColor: '#302F30', borderWidth: 1}}
        activeOpacity={0.7}
        onPress={this.toggleModal.bind(this)}
/>
    } else {
      return <Avatar
        large
        rounded
        onPress={() => console.log('Works!')}
        activeOpacity={0.7}
        icon={{name: 'account', type: 'material-community', color: 'white', size: 40}}
        avatarStyle={{borderColor: '#302F30', borderWidth: 1}}

        />
    }
  }

  profile () {
    var i = 0
    if (this.state.isModalVisible === true) {
      return (

        <View style={styles.profileContainer}>
          <Avatar
            height={180}
            rounded
            source={{ uri: this.props.user.profile_picture }}
            activeOpacity={0.7}
            avatarStyle={{borderColor: '#302F30', borderWidth: 1}}
          />

          <View style={styles.profileDataContainer}>
            <Text style={styles.profileDataSettings} >{this.props.user.name} {this.props.user.age} </Text>
          </View>

          <View style={styles.editProfileDataSettingsContainer}>
            <Text style={styles.editProfileDataSettings}>{this.props.user.value} </Text>
          </View>

        </View>
      )
    }
  }

  render (user) {
    return (
      <View style={{
        width: 320,
        left: 34
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
          <View style={{ flexDirection: 'row', marginTop: 65 }}>
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

          <View style={{ marginLeft: 20, marginBottom: 30 }}>

            <View style={{flexDirection: 'column',
              alignItems: 'baseline',
              marginBottom: 50,
              marginTop: 40 }}>

              <Text style={{fontSize: 40, color: 'white', fontFamily: 'GeosansLight', marginLeft: 5}}> Start a conversation
 </Text>
              <Text style={{fontSize: 12, color: 'white', fontFamily: 'GeosansLight', marginLeft: 55}}> Pick one of the lines to start a new conversation</Text>

            </View>
            <View style={{
              flexDirection: 'column',
              justifyContent: 'center',
              marginBottom: 10 }}>
              <View style={{
                flexDirection: 'column',
                justifyContent: 'center',
                marginBottom: 15,
                height: 30
              }}>

                <Button
                  icon={
                    <Icon
                      name='adjust'
                      type='material-community'
                      size={10}
                      color='white' />}
                  title='Where are we going tonight ?'
                  titleStyle={{ fontFamily: 'GeosansLight', fontSize: 15}}
                  buttonStyle={{
                    backgroundColor: 'transparent',
                    width: 210,
                    height: 35,
                    borderColor: 'white',
                    borderWidth: 1,
                    borderRadius: 10 }} />
              </View>
              <View style={{
                flexDirection: 'column',
                justifyContent: 'center',
                marginTop: 5,
                marginBottom: 15,
                height: 30
              }} >
                <Button
                  icon={
                    <Icon
                      name='adjust'
                      type='material-community'
                      size={10}
                      color='white' />}
                  title='Damn is your name Wifi? Cause i´m feeling a connection !'
                  titleStyle={{ fontFamily: 'GeosansLight', fontSize: 13}}
                  buttonStyle={{
                    backgroundColor: 'transparent',
                    width: 325,
                    height: 35,
                    borderColor: 'white',
                    borderWidth: 1,
                    borderRadius: 10 }} />
              </View>

              <View style={{
                flexDirection: 'column',
                justifyContent: 'center',
                marginTop: 5,
                marginBottom: 15,
                height: 30
              }} >
                <Button
                  icon={
                    <Icon
                      name='adjust'
                      type='material-community'
                      size={10}
                      color='white' />}
                  title=' Do you think Leo will ever get that Oscar ?'
                  titleStyle={{ fontFamily: 'GeosansLight', fontSize: 15 }}
                  buttonStyle={{
                    backgroundColor: 'transparent',
                    width: 280,
                    height: 35,
                    borderColor: 'white',
                    borderWidth: 1,
                    borderRadius: 10 }} />
              </View>
              <View style={{
                flexDirection: 'column',
                justifyContent: 'center',
                marginTop: 5,
                height: 30,
                marginBottom: 30
              }} >
                <Button
                  icon={
                    <Icon
                      name='adjust'
                      type='material-community'
                      size={10}
                      color='white' />}
                  title=' My doctor says i’m lacking vitamin U !'
                  titleStyle={{ fontFamily: 'GeosansLight', fontSize: 15}}
                  onPress={this.startchat1.bind(this)}
                  buttonStyle={{
                    backgroundColor: 'transparent',
                    width: 250,
                    height: 35,
                    borderColor: 'white',
                    borderWidth: 1,
                    borderRadius: 10 }} />
              </View>
            </View>
            <View style={{flexDirection: 'row',
              alignItems: 'baseline' }}>
              <Text style={{ fontSize: 16, color: 'white', fontFamily: 'GeosansLight', marginLeft: 50, marginBottom: 50, marginTop: 10 }}> or just send a ordinary message . . . </Text>
            </View>

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
  editProfileDataSettingsContainer:
  {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    left: 195,
    top: 95
  },
  editProfileDataSettings:
  {
    color: '#fff',
    fontFamily: 'GeosansLight',
    fontSize: 15
  },
  exitModalIcon:
  {
    marginTop: 12,
    marginRight: 312,
    width: 30
  },
  profileContainerInPlace:
  {

    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 170,
    marginTop: 20
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
    marginBottom: 50,
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
