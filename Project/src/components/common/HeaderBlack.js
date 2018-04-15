import React, {Component } from 'react'
import { View, Text } from 'react-native'
import { Header, Icon, Avatar, Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import { fetchProfileData } from '../../actions'
import { connect } from 'react-redux'
import _ from 'lodash'
import ProfilePictureHandeler from '../../utils/ProfilePictureHandeler'

import {firebaseRef} from '../../firebase/firebase'

import Modal from 'react-native-modal'

class HeaderBlack extends Component {
  constructor () {
    super()
    this.state = {
      isModalVisible: false
    }
  }

    // Call fetchList to get access to the users
  componentWillMount () {
    this.props.fetchProfileData()
  }

  toggleModal () {
    this.setState({ isModalVisible: !this.state.isModalVisible })
    this.profile()
  }
  changeProfile () {
    Actions.createProfile()
    this.toggleModal()
  }

  changeStatus () {
    Actions.selectStatus()
    this.toggleModal()
  }

  signOut () {
    Actions.login()
    this.toggleModal()
    firebaseRef.auth().signOut().then(function () {
      console.log('Signed Out')
    }, function (error) {
      console.error('Sign Out Error', error)
    })
  }

  profile () {
    if (this.state.isModalVisible == true) {
      return (
        <View style={{ position: 'relative',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 5,
          right: 54 }}>

          <Avatar
            height={200}
            rounded
            source={{ uri: this.props.profile[0].profile_picture }}
            activeOpacity={0.7}
        />

          <View style={{ position: 'absolute',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'baseline',
            left: 240,
            top: 100 }}>

            <Text style={{color: '#fff', fontFamily: 'GeosansLight', fontSize: 20}} >{this.props.profile[0].name} {this.props.profile[0].age} </Text>
          </View>

          <View style={{ position: 'absolute',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'baseline',
            left: 237,
            top: 125 }}>
            <Text style={{color: '#fff', fontFamily: 'GeosansLight', fontSize: 15}}onPress={this.changeProfile.bind(this)}> Edit Profile </Text>

            <Icon
              iconStyle={{marginBottom: 10}}
              containerStyle={{marginBottom: 10}}
              size={13}
              name='cog'
              type='font-awesome'
              color='#FFF'
              onPress={this.changeProfile.bind(this)}
/>
          </View>

        </View>

      )
    }
  }
  render () {
    return (
      <View>
        <View>
          <Modal isVisible={this.state.isModalVisible}
            onSwipe={() => this.setState({ isModalVisible: false })}
            swipeDirection='up'
            onSwipeThreshold={50}
            backdropOpacity={0.70}
            >
            <View style={{flexDirection: 'row' }}>
              <View style={{ marginTop: 12, marginRight: 312, width: 30}}>
                <Icon
                  name='clear'
                  type='clear'
                  color='#FFF'
                  onPress={this.toggleModal.bind(this)}
              />
              </View>

              <View style={{ position: 'absolute',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'baseline',
                left: 290,
                top: 15 }}>
                <Text style={{color: '#fff', fontFamily: 'GeosansLight', fontSize: 15}} onPress={this.signOut.bind(this)}>Sign Out</Text>
              </View>
            </View>
            <View style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>

              {this.profile()}
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Button
                raised
                icon={{name: 'cached'}}
                title='Change Status'
                rounded
                onPress={this.changeStatus.bind(this)}
                />
            </View>
          </Modal>
        </View>

        <Header
          style={{padding: 0}}
          backgroundColor='#1E1E1E'
          outerContainerStyles={{ height: 80 }}
          leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.toggleModal() }}
          centerComponent={{ text: 'People Out Tonight ', style: {color: '#fff', fontFamily: 'GeosansLight', fontSize: 15} }}
          rightComponent={{ icon: 'forum', color: '#fff' }}
      />
      </View>
    )
  }
}

const mapStateToProps = state => {
  const profile = _.map(state.profile, (val) => {
    return {...val}
  })
  return { profile }
}

export default connect(mapStateToProps, {fetchProfileData})(HeaderBlack)
