import React, { Component } from 'react';

// Importing varibels
import {
  AppRegistry,
  Text,
  View,
  Button,
  StyleSheet,
  Image,
    StatusBar
} from 'react-native';
// importing navigator to switch between pages
import { StackNavigator } from 'react-navigation';
import Login from './src/components/Login/Login';
import home from './src/components/home';


class githubapp extends React.Component{
 render(){
   return (
     <Login />
   );
 }
}

export default class homes extends Component{
 render(){
   return (
     <home />
   );
 }
}


// The navigation pages
const AmpSettingProject = StackNavigator({
  githubapp:{ screen: githubapp},
  homes:{screen: homes}


});

// app reg, Shows the react Component on the screen

AppRegistry.registerComponent('AmpSettingProject', () => AmpSettingProject);
