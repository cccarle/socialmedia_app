import React, {Component } from 'react'
import { View, Text } from 'react-native'
import { Avatar } from 'react-native-elements'

class ListUserItem extends Component {
  render (user) {
    return (
      <View style={styles.container}>
        <Avatar
          large
          rounded
          source={{uri: this.props.user.profile_picture}}
          onPress={() => console.log('Works!')}
          activeOpacity={0.7}
    />
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            {this.props.user.name} {this.props.user.age}
          </Text>
        </View>
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
    padding: 5,
    right: 54
  },
  textContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    right: 100,
    top: 36
  },
  text: {
    fontSize: 15,
    position: 'absolute',
    fontFamily: 'GeosansLight'
  }
}
export default ListUserItem
