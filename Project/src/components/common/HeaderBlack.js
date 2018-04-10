import React, {Component } from 'react'
import {Header} from 'react-native-elements'
import { Actions } from 'react-native-router-flux'

class HeaderBlack extends Component {
  render () {
    return (
      <Header
        style={{padding: 0}}
        backgroundColor='#1E1E1E'
        outerContainerStyles={{ height: 80 }}
        leftComponent={{ icon: 'menu', color: '#fff', onPress: () => Actions.selectStatus() }}
        centerComponent={{ text: 'People Out Tonight ', style: {color: '#fff', fontFamily: 'GeosansLight', fontSize: 15} }}
        rightComponent={{ icon: 'forum', color: '#fff' }}
      />
    )
  }
}

export default HeaderBlack
