import React, { Component } from 'react';

// Importing varibels
import {
  AppRegistry,
  Text,
  View,
  Button,
  StyleSheet,
  Image,
  StatusBar,
  Navigator
} from 'react-native';
// import components
import { StackNavigator } from 'react-navigation';
import Login from './src/components/Login/Login';
import HomeScreen from './src/components/home';
import HomeScreenLoggedIn from './src/components/homeScreenLoggedIn';
import Settings from './src/components/settings/settings';
import RockSetting from './src/components/settings/rock';
import BluesSetting from './src/components/settings/blues';
import PopSetting from './src/components/settings/pop';
import JazzSetting from './src/components/settings/jazz';
import User from './src/components/regUser/RegisterUser';
import MyFavoriteSettings from './src/components/settings/MyFavoriteSettings';
import CreateNewSetting from './src/components/settings/CreateNewSetting';

// setting up to navigate to Login as firstpage
class AmpSettingProject extends React.Component{

 render(){
   return (
     <Navigator
     initialRoute ={{
       id: 'Login'
     }}
     renderScene={
       this.AmpSettingProject
     }
     />

   );

 }

 // Navigates
AmpSettingProject(route,navigator){
  _navigator = navigator;
  switch (route.id) {
    case 'Login':
    return(<Login navigator={navigator} title='Login'/>);
    case 'HomeScreen':
    return(<HomeScreen navigator={navigator} title='Home'/>);
    case 'HomeScreenLoggedIn':
    return(<HomeScreenLoggedIn navigator={navigator} title='HomeScreenLoggedIn'/>);
    case 'Settings':
    return(<Settings navigator={navigator} title='Settings'/>);
    case 'RockSetting':
    return(<RockSetting navigator={navigator} title='RockSetting'/>);
    case 'BluesSetting':
    return(<BluesSetting navigator={navigator} title='BluesSetting'/>);
    case 'PopSetting':
    return(<PopSetting navigator={navigator} title='PopSetting'/>);
    case 'JazzSetting':
    return(<JazzSetting navigator={navigator} title='JazzSetting'/>);
    case 'User':
    return(<User navigator={navigator} title='User'/>);
    case 'ParentSetting':
    return(<ParentSetting navigator={navigator} title='ParentSetting'/>);
    case 'MyFavoriteSettings':
    return(<MyFavoriteSettings navigator={navigator} title='MyFavoriteSettings'/>);
    case 'CreateNewSetting':
    return(<CreateNewSetting navigator={navigator} title='CreateNewSetting'/>);


  }
}

}

AppRegistry.registerComponent('AmpSettingProject', () => AmpSettingProject);
