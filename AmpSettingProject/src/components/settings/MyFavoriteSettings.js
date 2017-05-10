import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';



export default class Myfavoritesetting extends Component {
  // Please render your button properly, this is just an example of how to bind click function to it
  render(){
    return (
      <View>
        <Text>
          {this.props.favoriteData}
        </Text>
      </View>
    )
  }
}
