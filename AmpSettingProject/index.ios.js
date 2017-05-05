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
import Settings from './src/components/settings/settings';
import RockSetting from './src/components/settings/rock';
import BluesSetting from './src/components/settings/blues';
import PopSetting from './src/components/settings/pop';
import JazzSetting from './src/components/settings/jazz';
import User from './src/components/regUser/RegisterUser';
import CreateSettings from './src/components/settings/CreateSettings';
import createnewsetting from './src/components/actions/createnewsettings';
import MyFavoriteSettings from './src/components/settings/MyFavoriteSettings';
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
    case 'CreateSettings':
    return(<CreateSettings navigator={navigator} title='CreateSettings'/>);
      case 'createnewsetting':
          return(<createnewsetting navigator={navigator} title='createnewsetting'/>);
          case 'MyFavoriteSettings':
              return(<MyFavoriteSettings navigator={navigator} title='MyFavoriteSettings'/>);


  }
}

}


// app reg, Shows the react Component on the screen

AppRegistry.registerComponent('AmpSettingProject', () => AmpSettingProject);
