import React, { Component } from 'react'
import { View, Text} from 'react-native'
// import {firebaseRef} from '../../firebase/firebase'
import {Avatar, Divider, Tile, ButtonGroup} from 'react-native-elements'
import { connect } from 'react-redux'
import { fetchList } from '../../actions'
import _ from 'lodash'
import FooterNav from '../FooterNav/FooterNav'
import HeaderBlack from '../common/HeaderBlack'

class GoingOut extends Component {
  constructor () {
    super()
    this.state = {
      selectedIndex: 2
    }
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }

  componentWillMount () {
    this.props.fetchList()
  }
  render () {
    const buttons = ['All', 'Female', 'Male']
    const { selectedIndex } = this.state
    console.log(this.props)

    return (

      <View>
        <HeaderBlack />

        <Tile
          imageSrc={require('../../assets/outback.jpg')}
          title='HARRYS 20% OFF ON FRIDAY NIGHT'
          caption='Click for more information'
          captionStyle={{ fontFamily: 'GeosansLight'
          }}
          featured
          height={250}
          titleStyle={{fontFamily: 'GeosansLight', justifyContent: 'center', alignItems: 'center'}}
/>

        <Divider style={{ backgroundColor: 'black' }} />

        <View style={{ justifyContent: 'center', alignItems: 'center'}} >
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{height: 30, width: 200, marginTop: 30, justifyContent: 'center', alignItems: 'baseline' }}
            textStyle={{fontFamily: 'GeosansLight'}}
          />
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 35}} >
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 5}}>
            <Avatar
              medium
              rounded
              source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}}
              onPress={() => console.log('Works!')}
              activeOpacity={0.7}
/>
            <Text style={{fontSize: 15, fontFamily: 'GeosansLight'}}> Johanna </Text>
            <Text style={{fontSize: 15, fontFamily: 'GeosansLight'}}> 23 </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 5}}>
            <Avatar
              medium
              rounded
              source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}}
              onPress={() => console.log('Works!')}
              activeOpacity={0.7}
/>
            <Text style={{fontSize: 15, fontFamily: 'GeosansLight'}}> Johanna </Text>
            <Text style={{fontSize: 15, fontFamily: 'GeosansLight'}}> 23 </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 5}}>
            <Avatar
              medium
              rounded
              source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}}
              onPress={() => console.log('Works!')}
              activeOpacity={0.7}
/>
            <Text style={{fontSize: 15, fontFamily: 'GeosansLight'}}> Johanna </Text>
            <Text style={{fontSize: 15, fontFamily: 'GeosansLight'}}> 23 </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 5}}>
            <Avatar
              medium
              rounded
              source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}}
              onPress={() => console.log('Works!')}
              activeOpacity={0.7}
/>
            <Text style={{fontSize: 15, fontFamily: 'GeosansLight'}}> Johanna </Text>
            <Text style={{fontSize: 15, fontFamily: 'GeosansLight'}}> 23 </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 5}}>
            <Avatar
              medium
              rounded
              source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}}
              onPress={() => console.log('Works!')}
              activeOpacity={0.7}
/>
            <Text style={{fontSize: 15, fontFamily: 'GeosansLight'}}> Johanna </Text>
            <Text style={{fontSize: 15, fontFamily: 'GeosansLight'}}> 23 </Text>
          </View>
        </View>
      </View>

    )
  }
}

const mapStateToProps = state => {
  return { users: state.list }
}
export default connect(mapStateToProps, {fetchList})(GoingOut)
