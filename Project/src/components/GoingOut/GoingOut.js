import React, { Component } from 'react'
import { View, FlatList, ImageBackground } from 'react-native'
import { ButtonGroup } from 'react-native-elements'
import { connect } from 'react-redux'
import { fetchList, fetchProfileData } from '../../actions'
import _ from 'lodash'
import HeaderBlack from '../Header/HeaderBlack'
import ListUserItem from '../ListUserItem/ListUserItem'
import styles from './GoingOut.style'
import { BlurView } from 'react-native-blur'

class GoingOut extends Component {
  constructor () {
    super()
    this.state = {
      selectedIndex: 0,
      loading: false
    }
    this.updateIndex = this.updateIndex.bind(this)
  }

  // Call fetchList with 0 to get access to all users
  
  componentWillMount () {
    let i = 0
    this.props.fetchList(i)
    this.props.fetchProfileData()
  }

  // updates the selectedIndex and calls the methods with the selectedindex

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
    this.fetchAllUsers(selectedIndex)
    this.fetchFemale(selectedIndex)
    this.fetchMale(selectedIndex)
  }

  fetchAllUsers (index) {
    if (index === 0) {
      this.props.fetchList(index)
    }
  }
  fetchFemale (index) {
    if (index === 1) {
      this.props.fetchList(index)
    }
  }

  fetchMale (index) {
    if (index === 2) {
      this.props.fetchList(index)
    }
  }

  renderItem ({ item, index }) {
    return <ListUserItem user={item} />
  }

  render () {
    const buttons = ['All', 'Female', 'Male']
    const { selectedIndex } = this.state
    return (

      <ImageBackground
        source={require('../../assets/goingOutBackground.jpg')}
        style={styles.container}
         >

        <HeaderBlack />
        <View>
          <BlurView
            style={styles.absolute}
            blurType='dark'
            blurAmount={0.001}
            height={695}
        />
          <View style={{ justifyContent: 'center', alignItems: 'center' }} >

            <ButtonGroup
              onPress={this.updateIndex.bind(this)}
              selectedIndex={selectedIndex}
              selectedButtonStyle={{backgroundColor: 'black'}}
              buttons={buttons}
              containerStyle={{ backgroundColor: 'transparent', height: 23, width: 200, marginTop: 30, marginBottom: -20, justifyContent: 'center', alignItems: 'baseline' }}
              textStyle={{fontFamily: 'GeosansLight', color: 'white'}}
          />
          </View>

          <View style={{ maxHeight: 580, marginTop: 50 }} >

            <FlatList
              data={this.props.users}
              renderItem={this.renderItem}
           />

          </View>
        </View>
      </ImageBackground>

    )
  }
}

const mapStateToProps = state => {
  const users = _.map(state.list, (val) => {
    return {...val}
  })
  const profile = _.map(state.profile, (val) => {
    return { ...val }
  })
  return { users, profile }
}

export default connect(mapStateToProps, {fetchList, fetchProfileData})(GoingOut)
