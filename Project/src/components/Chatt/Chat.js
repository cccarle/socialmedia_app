
import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import {firebaseRef} from '../../firebase/firebase'
export default class Chat extends Component {
  constructor (props) {
    super(props)
    this.state = {
      messages: []
    }

    const { currentUser } = firebaseRef.auth()

    var b
    firebaseRef.database().ref(`/users/${currentUser.uid}/profile`).ref.on('value', function (snapshot) {
      console.log(snapshot.val())
      b = snapshot.val()
    })

    this.user = firebaseRef.auth().currentUser
    this.friend = this.props.data
    this.userData = b
    // Get current users body
    console.log(this.props.profiles)
    console.log(this.friend)
    console.log(b)
    this.chatRef = this.getRef().child('chat/' + this.generateChatId())
    this.chatRefData = this.chatRef.orderByChild('order')
    this.onSend = this.onSend.bind(this)
  }

  generateChatId () {
    if (this.user.uid > this.friend.key) { return `${this.user.uid}-${this.friend.key}` } else { return `${this.friend.key}-${this.user.uid}` }
  }
  getRef () {
    return firebaseRef.database().ref()
  }

  listenForItems (chatRef) {
    chatRef.on('value', (snap) => {
            // get children as an array
      var items = []

      console.log(this.userData)
      snap.forEach((child) => {
        var avatar = this.props.data.profile_picture
        var name = this.friend.key == this.user.uid ? this.userData.name : this.friend.name
        items.push({
          _id: child.val().createdAt,
          text: child.val().text,
          createdAt: new Date(child.val().createdAt),
          user: {
            _id: this.friend.uid,
            avatar: avatar,
            name: name

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

  onSend (messages = []) {
        // this.setState({
        //     messages: GiftedChat.append(this.state.messages, messages),
        // });
    messages.forEach(message => {
      console.log(message)
      var now = new Date().getTime()

      var name = this.friend.name == this.user.name ? this.userData.name : this.friend.name

      this.chatRef.push({
        _id: now,
        text: message.text,
        createdAt: now,
        uid: this.user.uid,
        order: -1 * now,
        profile: this.friend.profile_picture,
        key: this.friend.key,
        name: this.userData.name,
        nameFriend: this.friend.name,
        friendsAvatar: this.friend.profile_picture
      })
    })
  }
  render () {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={this.onSend.bind(this)}
        user={{
          _id: this.friend.key,
          profilepic: this.userData.profile_picture,
          key: this.userData.key,
          name: this.friend.name
        }}
                />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    marginRight: 10,
    marginLeft: 10
  }
})
