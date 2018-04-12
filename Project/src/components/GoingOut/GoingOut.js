import React, { Component } from 'react'
import { View, ListView } from 'react-native'
import { Divider, Tile, ButtonGroup } from 'react-native-elements'
import { connect } from 'react-redux'
import { fetchList } from '../../actions'
import _ from 'lodash'
import HeaderBlack from '../common/HeaderBlack'
import ListUserItem from './ListUserItem'

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

  // Call fetchList to get access to the users
  componentWillMount () {
    this.props.fetchList()

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

  render () {
    const buttons = ['All', 'Female', 'Male']
    const { selectedIndex } = this.state

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

        <View style={{ justifyContent: 'center', alignItems: 'center' }} >
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{ height: 30, width: 200, marginTop: 30, justifyContent: 'center', alignItems: 'baseline' }}
            textStyle={{fontFamily: 'GeosansLight'}}
          />
        </View>
        <View style={{ height: 320, marginTop: 35 }} >

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
  return { users }
}

export default connect(mapStateToProps, {fetchList})(GoingOut)
