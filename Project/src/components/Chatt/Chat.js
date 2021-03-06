import React, {Component} from 'react'
import {
    ImageBackground
} from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import { firebaseRef } from '../../firebase/firebase'
export default class Chat extends Component {
  constructor (props) {
    super(props)
    this.state = {
      messages: []
    }

    const { currentUser } = firebaseRef.auth()

    // Gets value from the current users data
    var currentUserData
    firebaseRef.database().ref(`/users/${currentUser.uid}/profile`).ref.on('value', function (snapshot) {
      currentUserData = snapshot.val()
    })

    // Current logged in user
    this.user = firebaseRef.auth().currentUser

    // chat friends data
    this.friend = this.props.data
    // Current Users data
    this.userData = currentUserData

    this.chatRef = this.getRef().child(this.generateChatId())
    this.chatRefData = this.chatRef.orderByChild('order')
    this.onSend = this.onSend.bind(this)
  }

  // Generate a chat id from the current users key & and the friends users.
  generateChatId () {
    if (this.user.uid > this.friend.key) return `${this.user.uid}-${this.friend.key}`
    else return `${this.friend.key}-${this.user.uid}`
  }

  // Get firebase database reference
  getRef () {
    return firebaseRef.database().ref('chat')
  }

  listenForItems (chatRef) {
    chatRef.on('value', (snap) => {
    // get children as an array
      var items = []

      snap.forEach((child) => {
        var avatar = this.props.data.profile_picture
        var name = this.friend.key == this.user.uid ? this.userData.name : this.friend.name
        items.push({
          _id: child.val().createdAt,
          text: child.val().text,
          createdAt: new Date(child.val().createdAt),
          user: {
            _id: child.val().uid,
            avatar: avatar

          }
        })
      })

      this.setState({
        loading: false,
        messages: items
      })
    })
  }

  componentDidMount () {
    this.listenForItems(this.chatRefData)
  }

  componentWillUnmount () {
    this.chatRefData.off()
  }

  // When a message is send , include both current users profile data & the friends users data.
  onSend (messages = []) {
    messages.forEach(message => {
      var now = new Date().getTime()
      var name = this.friend.name == this.user.name ? this.userData.name : this.friend.name

      this.chatRef.push({
        _id: now,
        text: message.text,
        createdAt: now,
        uid: this.user.uid,
        order: -1 * now,
        avatar: this.userData.profile_picture,
        key: this.user.uid,
        friendKey: this.friend.key,
        name: this.userData.name,
        nameFriend: this.friend.name,
        friendsAvatar: this.friend.profile_picture
      })
    })
  }

  render () {
    return (
      <ImageBackground
        source={require('../../assets/chatBack.jpg')}
        style={{flex: 1}}
  >

        <GiftedChat
          messages={this.state.messages}
          onSend={this.onSend.bind(this)}
          
          user={{
            _id: this.user.uid,
            profilepic: this.userData.profile_picture,
            key: this.userData.key,
            name: this.friend.name
          }}
                />

      </ImageBackground>
    )
  }
}
