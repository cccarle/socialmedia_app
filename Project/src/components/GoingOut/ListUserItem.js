import React, {Component } from 'react'
import { View, Text } from 'react-native'
import { Avatar, Icon } from 'react-native-elements'
import { Spinner } from '../common'

class ListUserItem extends Component {
  renderMood () {
    if (this.props.user.prop && this.props.user.value === undefined) {
      return <Text />
    } else {
      return (
        <Text> {this.props.user.mood} {this.props.user.value} </Text>
      )
    }
  }

  renderAvatarOrSpinner () {
    if (this.props.user.profile_picture) {
      return <Avatar
        large
        rounded
        source={{uri: this.props.user.profile_picture}}
        onPress={() => console.log('Works!')}
        avatarStyle={{borderColor: '#302F30', borderWidth: 1}}
        activeOpacity={0.7}
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
    position: 'absolute',
    fontFamily: 'GeosansLight'
  }
}

export default ListUserItem
