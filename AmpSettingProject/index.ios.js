import React from 'react';

// Importing varibels
import {
  AppRegistry,
  Text,
  View,
  Button,
  StyleSheet
} from 'react-native';
// importing navigator to switch between pages
import { StackNavigator } from 'react-navigation';

// Create first react Component
// first page
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome To Guitar Amp',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.backgroundColor}>
        <Text style={styles.headerText}>Choose settings!</Text>
        <Button
          onPress={() => navigate('Settings')}
          title="Amp-Settings"
        />
      </View>
    );
  }
}

// second page "choose settings"
class Settings extends React.Component {
  static navigationOptions = {
    title: 'Amp-Settings',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.backgroundColor}>
        <Text style={styles.headerText}>Settings</Text>
        <Button
          onPress={() => navigate('RockSetting')}
          title="Rock"
        />
        <Button
          onPress={() => navigate('PopSetting')}
          title="Pop"
        />
        <Button
          onPress={() => navigate('BluesSetting')}
          title="Blues"
        />
        <Button
          onPress={() => navigate('JazzSetting')}
          title="Jazz"
        />
      </View>
    );
  }
}

// the different pages for the setting

class RockSetting extends React.Component {
  static navigationOptions = {
    title: 'Rock-Setting',
  };
  render() {
    return (
      <View>
        <Text style={styles.headerText}>Rock-Setting</Text>
      </View>
    );
  }
}

class PopSetting extends React.Component {
  static navigationOptions = {
    title: 'Pop-Setting',
  };
  render() {
    return (
      <View>
        <Text style={styles.headerText}>Pop</Text>
      </View>
    );
  }
}

class BluesSetting extends React.Component {
  static navigationOptions = {
    title: 'Blues-Setting',
  };
  render() {
    return (
      <View>
        <Text style={styles.headerText}>Blues</Text>
      </View>
    );
  }
}

class JazzSetting extends React.Component {
  static navigationOptions = {
    title: 'Jazz-Setting',
  };
  render() {
    return (
      <View>
        <Text style={styles.headerText}>Jazz</Text>
        <Text> Treble:10 Bass:10 Mid:12</Text>
      </View>
    );
  }
}


// the stylesheet
const styles = StyleSheet.create({
  headerText: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold'
},
backgroundColor:{
  width: 380,
  height: 700,
  backgroundColor: 'skyblue'
}
});


// The navigation pages
const AmpSettingProject = StackNavigator({
  Home: { screen: HomeScreen },
  Settings: { screen: Settings },
  RockSetting: {screen: RockSetting},
  PopSetting: {screen: PopSetting},
  BluesSetting: {screen: BluesSetting},
  JazzSetting: {screen: JazzSetting}

});

// app reg, Shows the react Component on the screen

AppRegistry.registerComponent('AmpSettingProject', () => AmpSettingProject);
