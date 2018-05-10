import React, { Component } from 'react'
import { View, Text, ListView,TouchableOpacity, Image} from 'react-native'
import {firebaseRef} from '../../firebase/firebase'



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
        console.log(this.friendsRef)

    }

    getRef() {
        const { currentUser } = firebaseRef.auth()

        return firebaseRef.database().ref()
    }

    listenForItems(friendsRef) {
        var user = firebaseRef.auth().currentUser;

        friendsRef.on('value', (snap) => {

            console.log(snap.val())
            console.log(user.uid)
                 var a = []
            let snaps = snap.val()
            let keys = Object.keys(snaps)
            for (var i = 0; i < keys.length; i++) {
                let k = keys[i]
                let key = k
                let text = snaps[k].text
                console.log(text)
            }

            // get children as an array
            var items = [];
            snap.forEach((child) => {
                if(child.val().email != user.email)
                    items.push({
                        name: child.val().name,
                        uid: child.val().uid,
                        email: child.val().email
                    });
            });
            
            console.log(items)

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
        return <TouchableOpacity onPress={() => console.log('edsd') }>
            <View >
                <Image source={{ uri: 'https://www.gravatar.com/avatar/' + (rowData.email) }} />
                <Text >{rowData.name}</Text>
            </View>
        </TouchableOpacity>
    }

    render() {
        return (
            <View style={{flex:1, marginTop:200}} >
                <View >
                    <Text >My Friends</Text>
                    <TouchableOpacity>
                        <Text >Invite More Freinds</Text>
                    </TouchableOpacity>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow} />
            </View>
        );
    }
}



export default ChatList
