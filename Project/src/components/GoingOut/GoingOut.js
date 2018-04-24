import React, { Component } from 'react'
import { View, ListView, ImageBackground, StyleSheet, Button} from 'react-native'
import { ButtonGroup, Header, Avatar} from 'react-native-elements'
import { connect } from 'react-redux'
import { fetchList, fetchProfileData } from '../../actions'
import _ from 'lodash'
import { Spinner } from '../common'
import HeaderBlack from '../common/HeaderBlack'
import ListUserItem from './ListUserItem'
import styles from './GoingOut.style'
import { BlurView } from 'react-native-blur'

class GoingOut extends Component {
  constructor () {
    super()
    this.state = {
      selectedIndex: 2,
      loading: false
    }
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }

  // Call fetchList to get access to the users
  componentWillMount () {
    this.props.fetchList()
    this.props.fetchProfileData()
    this.createDataSource(this.props)
  }

  // When user scrolls, the list will update
  updateData () {
    this.props.fetchList()
  }

  componentWillReceiveProps (nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props
    this.createDataSource(nextProps)
  }

  createDataSource ({ users }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.dataSource = ds.cloneWithRows(users)
  }

  // Render out the users
  renderRow (user) {
    return <ListUserItem user={user} />
  }
  onButtonPress () {
    this.setState({loading: true })
  }

  render () {
    console.log(this.props.profile[0])
    const buttons = ['All', 'Female', 'Male']
    const { selectedIndex } = this.state
    return (

      <ImageBackground
        source={require('../../assets/ssss.jpg')}
        style={styles.container}
         >

        <HeaderBlack />
        <View>
          <BlurView
            style={styless.absolute}
            blurType='dark'
            blurAmount={0.001}
        />
          <View style={{ justifyContent: 'center', alignItems: 'center' }} >

            <ButtonGroup
              onPress={this.updateIndex}
              selectedIndex={selectedIndex}
              selectedButtonStyle={{backgroundColor: 'black'}}
              buttons={buttons}
              // onPress={this.setState({loading: true })}
              containerStyle={{ backgroundColor: 'transparent', height: 23, width: 200, marginTop: 30, marginBottom: -20, justifyContent: 'center', alignItems: 'baseline' }}
              textStyle={{fontFamily: 'GeosansLight', color: 'white'}}
          />
          </View>

          <View style={{ height: 650, marginTop: 50 }} >

            <ListView
              showsVerticalScrollIndicator={false}
              enableEmptySections
              dataSource={this.dataSource}
              renderRow={this.renderRow}
              onScroll={this.updateData.bind(this)}
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

const styless = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
})

export default connect(mapStateToProps, {fetchList, fetchProfileData})(GoingOut)
