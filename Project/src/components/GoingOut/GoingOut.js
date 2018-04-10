import React, { Component } from 'react'
import { View, Text, ListView } from 'react-native'
import styles from './GoingOut.style'
// import {firebaseRef} from '../../firebase/firebase'
import { Avatar, Header, Container, List} from 'react-native-elements'
import { connect } from 'react-redux'
import { fetchList } from '../../actions'
import _ from 'lodash'
import ListItem from './ListItem'
class GoingOut extends Component {
  componentWillMount () {
    this.props.fetchList()
    console.log(this.props)
  }
  render () {
    console.log(this.props.employees)
    

    return (

      <View>
        <Header
          style={{padding: 0}}
          backgroundColor='#1E1E1E'
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'People Out Tonight', style: { color: '#fff', fontFamily: 'GeosansLight', fontSize: 15} }}
          rightComponent={{ icon: 'message', color: '#fff' }}
/>

      </View>
    )
  }
}

const mapStateToProps = state => {
  // const employees = //_.map(state.list, (val, uid) => {
  //   return { ...val, uid }
  // })

  return { employees: state.list }
}
export default connect(mapStateToProps, {fetchList})(GoingOut)
