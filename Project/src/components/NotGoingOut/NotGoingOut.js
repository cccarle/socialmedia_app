import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './NotGoingOut.style'

class NotGoingOut extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={styles.HeadText}>
          I understand you, sometime it´s nice to be home
      </Text>
          <Text style={styles.HeadText}>
          Here if netlfix top series right know
      </Text>
        </View>
        <View style={{ marginBottom: 90 }} />
      </View>
    )
  }
}

export default NotGoingOut
