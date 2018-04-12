import React, {Component } from 'react'
import { View, Text } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements'

class ListUserItem extends Component {
  render (user) {
    return (

      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 5}}>
        <Avatar
          medium
          rounded
          source={{uri: this.props.user.profile_picture}}
          onPress={() => console.log('Works!')}
          activeOpacity={0.7}
/>
        <Text style={{fontSize: 15, fontFamily: 'GeosansLight'}}> {this.props.user.name} </Text>
        <Text style={{fontSize: 15, fontFamily: 'GeosansLight'}}> {this.props.user.age} </Text>
      </View>
    )
  }
}

export default ListUserItem
