import React, { Component } from 'react'
import { View, Image, Text, TouchableHighlight } from 'react-native'
import styles from './SelectStatus.style'
import { connect } from 'react-redux'
import { upDateStatus, upDateStatusToNotGoOut } from '../../actions'
import { Tile } from 'react-native-elements'
import {firebaseRef} from '../../firebase/firebase'
import Geocoder from 'react-native-geocoding'

class SelectStatus extends Component {
  // Gets the current latitude & longitude, and the Town.
  componentDidMount () {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { currentUser } = firebaseRef.auth()

        firebaseRef.database().ref(`/users/${currentUser.uid}/profile`)
          .update({ latitude: position.coords.latitude, longitude: position.coords.longitude })
          .then(() => {
            console.log('postion added')
            Geocoder.init('AIzaSyAVjxpARJCUf8w76KlANf7VDBxX_d3j4Os')
            Geocoder.from(position.coords.latitude, position.coords.longitude)
              .then(json => {
                var currentTown = json.results[0].address_components[3].long_name
                firebaseRef.database().ref(`/users/${currentUser.uid}/profile`)
                  .update({ position: currentTown })
              })
              .catch(error => console.warn(error))
          })
      },
      (error) => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    )
  }
  /*
  Set the status to true
  */
 
  goOutButtonPress () {
    this.props.upDateStatus({ status: true })
  }

  /*
  Set the status to false
  */

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
            imageSrc={require('../../assets/darkgreenbackground.png')}
            imageContainerStyle={{ }}
            title='What are u up for tonight ? '
            featured
            activeOpacity={1}
            caption='Click on the icon of your choice'
            captionStyle={{ fontFamily: 'GeosansLight'
            }}
            titleStyle={{fontFamily: 'GeosansLight', fontSize: 55, justifyContent: 'center', alignItems: 'center'}}
            height={1250}
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
              source={require('../../assets/chatting.png')}
        />
          </TouchableHighlight>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingTop: 5, marginLeft: 18}} >
          <Text style={{fontFamily: 'GeosansLight', color: 'white'}}> Im going out </Text>
          <Text style={{fontFamily: 'GeosansLight', color: 'white', marginLeft: 5}}> Nah, i'll be at home</Text>
        </View>

        <Text style={{fontFamily: 'GeosansLight', color: 'white', marginLeft: 220}}>  But i still wanna chat</Text>

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
