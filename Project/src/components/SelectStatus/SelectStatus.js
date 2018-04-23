import React, { Component } from 'react'
import { View, Button, Image, Text, TouchableHighlight } from 'react-native'
import styles from './SelectStatus.style'
import { connect } from 'react-redux'
import { upDateStatus, upDateStatusToNotGoOut } from '../../actions'
import { Tile } from 'react-native-elements'

class SelectStatus extends Component {
  goOutButtonPress () {
    this.props.upDateStatus({ status: true })
  }

  notGoOutButtonPress () {
    this.props.upDateStatusToNotGoOut({ status: false })
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>

          <Tile
            imageSrc={require('../../assets/outbackmin.jpg')}
            imageContainerStyle={{ }}
            title='What are u up for tonight ? '
            featured
            activeOpacity={1}
            caption='Click on the icon of your choice'
            captionStyle={{ fontFamily: 'GeosansLight'
            }}
            titleStyle={{fontFamily: 'GeosansLight', fontSize: 55, justifyContent: 'center', alignItems: 'center'}}
            height={1200}
/>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <TouchableHighlight underlayColor='transparent' style={{ }}onPress={() => this.goOutButtonPress()} >
            <Image
              style={{ width: 145, height: 145 }}
              source={require('../../assets/pint1.png')}
        />
          </TouchableHighlight>
          <TouchableHighlight underlayColor='transparent' style={{ }}onPress={() => this.notGoOutButtonPress()} >

            <Image
              style={{ width: 145, height: 145 }}
              source={require('../../assets/sleep.png')}
        />
          </TouchableHighlight>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',paddingTop: 5}} >
          <Text style={{fontFamily: 'GeosansLight', color: 'white'}}> Im Going Out </Text>
          <Text style={{fontFamily: 'GeosansLight', color: 'white'}}> Im Going To Bed </Text>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    status: state.status.status
  }
}

export default connect(mapStateToProps, { upDateStatus, upDateStatusToNotGoOut })(SelectStatus)
