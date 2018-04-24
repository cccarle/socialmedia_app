import React, { Component } from 'react'
import { View, ListView, Text} from 'react-native'
import { Divider, Tile, ButtonGroup, Header } from 'react-native-elements'
import { connect } from 'react-redux'
import { fetchList, fetchProfileData } from '../../actions'
import _ from 'lodash'
import HeaderBlack from '../common/HeaderBlack'
import {Spinner} from '../common'
import ListUserItem from './ListUserItem'
import styles from './GoingOut.style'

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

  renderSpinner () {
    if (this.state.loading === true) { return <Spinner size='large' /> }
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

  render () {
    const buttons = ['All', 'Female', 'Male']
    const { selectedIndex } = this.state

    return (
      <View>

        <HeaderBlack />

        <Tile
          imageSrc={require('../../assets/outbackmin.jpg')}
          title='HARRYS 20% OFF ON FRIDAY NIGHT'
          caption='Click for more information'
          captionStyle={{ fontFamily: 'GeosansLight'
          }}
          featured
          height={250}
          titleStyle={styles.titleStyles}
        />

        <Divider style={{ backgroundColor: 'black' }} />

        <View style={{ justifyContent: 'center', alignItems: 'center' }} >
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={styles.buttonGroupContainer}
            textStyle={{fontFamily: 'GeosansLight'}}
          />
        </View>

        <View style={{ height: 385, marginTop: 35 }} >
          {this.renderSpinner()}
          <ListView
            showsVerticalScrollIndicator={false}
            enableEmptySections
            dataSource={this.dataSource}
            renderRow={this.renderRow}
            onScroll={this.updateData.bind(this)}
        />
        </View>
      </View>
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
