import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    ImageBackground
} from 'react-native'
import { GiftedChat, InputToolbar } from 'react-native-gifted-chat'
import {firebaseRef} from '../../firebase/firebase'

export default class Chat extends Component {
  constructor (props) {
    super(props)
    this.state = {
      messages: []
    }

    this.user = firebaseRef.auth().currentUser
    this.friend = this.props.data

    this.chatRef = this.getRef().child(this.generateChatId())
    this.chatRefData = this.chatRef.orderByChild('order')
    this.onSend = this.onSend.bind(this)
  }

  generateChatId () {
    if (this.user.uid > this.friend.key) { return `${this.user.uid}-${this.friend.key}` } else { return `${this.friend.key}-${this.user.uid}` }
  }

  getRef () {
    const { currentUser } = firebaseRef.auth()
    return firebaseRef.database().ref(`/users/${currentUser.uid}/profile/chatroom`)
  }

  listenForItems (chatRef) {
    chatRef.on('value', (snap) => {
            // get children as an array
      var items = []

      snap.forEach((child) => {
        console.log(child.val())
        var avatar = this.props.data.profile_picture
        var name = child.val().uid == this.user.uid ? this.user.name : this.friend.name
        items.push({
          _id: child.val().createdAt,
          text: child.val().text,
          createdAt: new Date(child.val().createdAt),
          user: {
            _id: child.val().uid
            // name: name,
            // avatar: avatar
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

  renderInputToolbar (props) {
    // Add the extra styles via containerStyle
    return <InputToolbar {...props} containerStyle={{borderTopWidth: 1.5, borderTopColor: '#333', marginBottom: 5}} />
  }

  onSend (messages = []) {
        // this.setState({
        //     messages: GiftedChat.append(this.state.messages, messages),
        // });
    messages.forEach(message => {
      var now = new Date().getTime()
      this.chatRef.push({
        _id: now,
        text: message.text,
        createdAt: now,
        uid: this.user.uid,
        order: -1 * now
      })
    })
  }
  render () {
    return (
      <ImageBackground
        source={require('../../assets/thihi.png')}
        style={styles.container}
       >
        <View style={{height: 810}}>
          <GiftedChat
            renderInputToolbar={this.renderInputToolbar}
            messages={this.state.messages}
            onSend={this.onSend.bind(this)}
            user={{
              _id: this.user.uid
            }}
                />
        </View>
      </ImageBackground>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 700
  }
})
