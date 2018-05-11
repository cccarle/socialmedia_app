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
        this.friendsRef = this.getRef().child('chat')
        this.user = firebaseRef.auth().currentUser

        console.log(this.props.data)
    }

    getRef() {
        const { currentUser } = firebaseRef.auth()

        return firebaseRef.database().ref()
    }



    listenForItems(friendsRef) {
        var user = firebaseRef.auth().currentUser;

        var data
        friendsRef.on('value', (snap) => {
            // get children as an array
            var items = [];
            var as = []
            let snaps = snap.val()

            snap.forEach((child) => {

                let a = child.val()

                const users = _.map(a, (val) => {
                    return { ...val }
                })
                console.log(users)
                let ab = users.filter(element => this.user.uid === user.key)
                console.log(ab)
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

                    if (this.user.uid === uid ) {
                        console.log(friendName)
                        var names = friendName
                        var avatar = friendsAvatar
                        var key = friendKey
                    } else {
                        console.log(name)
                        var names = name
                        var avatar = avatar
                        var key = key

                    }
                items.push({
                    name: names,
                    text: text,
                    profilAvatar: avatar,
                    key: key
                });

            });

            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(items),
                loading: false
            });

        });
    }

    componentDidMount() {
        this.listenForItems(this.friendsRef);
    }
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