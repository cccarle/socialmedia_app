import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './GoingOut.style'

class GoingOut extends Component {
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
          People Who Are Going Out Tonight !
      </Text>
        </View>
        <View style={{ marginBottom: 90 }} />
      </View>
    )
  }
}

export default GoingOut
