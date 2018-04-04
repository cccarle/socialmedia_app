import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import styles from './SelectStatus.style'
import { connect } from 'react-redux'
import { upDateStatus, upDateStatusToNotGoOut } from '../../actions'

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
          <Text style={styles.HeadText}>
          What are you doing tonight ?
      </Text>
        </View>
        <View style={{ marginBottom: 90 }}>
          <Button onPress={this.goOutButtonPress.bind(this)} title='Go Out' />
          <Button onPress={this.notGoOutButtonPress.bind(this)} title='Stay Home' />
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
