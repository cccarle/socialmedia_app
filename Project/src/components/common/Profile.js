import React, {Component } from 'react'
import { View, Text } from 'react-native'
import { Avatar} from 'react-native-elements'

class Profile extends Component {
  render (profile) {
    return (

      <View style={{ position: 'relative',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        right: 54 }}>
        <Avatar
          medium
          rounded
          source={{uri: this.props.profile.profile_picture}}
          onPress={() => console.log('Works!')}
          activeOpacity={0.7}
    />
      </View>
    )
  }
}

export default Profile
