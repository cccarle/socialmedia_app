import React, { Component } from 'react'
import { View, Text, ListView, TouchableOpacity, ImageBackground } from 'react-native'
import { firebaseRef } from '../../firebase/firebase'
import { Avatar, Icon, Button, Divider } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import styles from './ChatList.style'
import { BlurView } from 'react-native-blur'
import _ from 'lodash'


var navigator;
class ChatList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loading: true
        };

        // get all chats from the firebase database

        this.friendsRef = this.getRef().child('chat')
        
        // Ref to the current logged in user

        this.user = firebaseRef.auth().currentUser
    }

    // Ref to firebase Database
    
    getRef() {
        return firebaseRef.database().ref()
    }

    listenForItems(friendsRef) {

        // Logged in user

        var user = firebaseRef.auth().currentUser.uid;

        var data

        friendsRef.on('value', (snap) => {
            // get children as an array
            var items = [];
            let snaps = snap.val()

            console.log(snaps)
        
            // if this.current
        
        snap.forEach((child) => {

                let childsValue = child.val()
                
                // Sorting out the keys
    
                const users = _.map(childsValue, (val) => {
                    return { ...val }
                })

                // Get the properties i want from the keys in users

                users.forEach(element => {

                        text = element.text,
                        avatar = element.avatar,
                        name = element.name,
                        friendName = element.nameFriend,
                        key = element.key,
                        uid = element.uid,
                        friendsAvatar = element.friendsAvatar,
                        friendKey = element.friendKey

                });

                // if the user  render friends name and friendsavatar
                //  else render name and avatar from the users.element

                if (this.user.uid === uid) {
                    var names = friendName
                    var avatar = friendsAvatar
                    var key = friendKey
                } else {
                    var names = name
                    var avatar = avatar
                    var key = key
                }

                // Adds all properties to items array

                items.push({
                    name: names,
                    text: text,
                    profilAvatar: avatar,
                    key: key
                });
            });

            // Updates the state with items array
            
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(items),
                loading: false
            });

        });
    }

    componentDidMount() {
        this.listenForItems(this.friendsRef);
    }

/*
Renders out a profile avatar, name and the latest message from the rowData
*/

    renderRow = (rowData) => {

        let userData = {
            name: rowData.name,
            key: rowData.key,
            profile_picture: rowData.profilAvatar
        }
        return <TouchableOpacity onPress={() => Actions.chat({ data: userData })}>
            <Divider style={{ backgroundColor: 'white' }} />
            <View style={styles.container}>
                <Avatar
                    size='medium'
                    rounded
                    source={{ uri: rowData.profilAvatar }}
                    activeOpacity={0.7}
                    avatarStyle={{ borderColor: '#302F30', borderWidth: 1 }}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {rowData.name}
                    </Text>
                </View>

                <View style={styles.textContainer2}>
                    <Text style={styles.text}>
                        {rowData.text}
                    </Text>
                </View>
            </View>

        </TouchableOpacity>



    }

    render() {
        return (
            <ImageBackground
                source={require('../../assets/chatBack.jpg')}
                style={styles.container2}
            >

                <BlurView
                    style={styles.absolute}
                    blurType='dark'
                    blurAmount={0.001}
                    height={995}
                />
                <View style={{ marginTop: 120 }} >
                    <ListView
                        enableEmptySections
                        dataSource={this.state.dataSource}
                        renderRow={this.renderRow} />
                </View>
                <Divider style={{ backgroundColor: 'white' }} />

            </ImageBackground>
        );
    }
}



export default ChatList