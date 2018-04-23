import React, { Component } from 'react'

import styles from './NotGoingOut.style'
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements'

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
          <Card
            title='Tarzan'
            image={require('../../assets/outbackmin.jpg')}>
            <Text style={{marginBottom: 10}}>
    The idea with React Native Elements is more about component structure than actual design.
  </Text>
            <Button
              icon={{name: 'movie'}}
              backgroundColor='#03A9F4'
              fontFamily='GeosansLight'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              containerStyle={{height: 200, width:100}}
              title='Read more' />
              
          </Card>
          
        </View>
        <View style={{ marginBottom: 90 }} />
      </View>
    )
  }
}

export default NotGoingOut
