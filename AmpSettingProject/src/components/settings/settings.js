import React, { Component } from 'react';
import { Container, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base';

// Importing varibels
import {
  StyleSheet,
  View,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  Button,
  navigate
} from 'react-native';

// navigate the button to different pages.

class Settings extends React.Component {
  onButtonPress1(){
    this.props.navigator.push({
      id: 'RockSetting'
    });
  }
  onButtonPress2(){
    this.props.navigator.push({
      id: 'BluesSetting'
    });
  }
  onButtonPress3(){
    this.props.navigator.push({
      id: 'PopSetting'
    });
  }
  onButtonPress4(){
    this.props.navigator.push({
      id: 'JazzSetting'
    });
  }
  onButtonPress5(){
    this.props.navigator.push({
      id: 'HomeScreen'
    });
  }

  render() {
    return (
      <View style= {styles.container}>


    <Container>
        <Content>
            <List>
                <ListItem>
                  <TouchableOpacity onPress={this.onButtonPress1.bind(this)}>

                    <Thumbnail square size={80} source={require('../../images/amp1.jpg')} />
                    <Body>
                        <Text>RockSetting</Text>
                        <Text note>Crushing acdc rock noise </Text>
                    </Body>
                  </TouchableOpacity>

                </ListItem>
            </List>
        </Content>
    </Container>

    <Container>
        <Content>
            <List>
                <ListItem>
                  <TouchableOpacity onPress={this.onButtonPress2.bind(this)}>

                    <Thumbnail square size={80} source={require('../../images/amp1.jpg')} />
                    <Body>
                        <Text>BluesSetting</Text>
                        <Text note> BB.King anyone ? </Text>
                    </Body>
                  </TouchableOpacity>

                </ListItem>
            </List>
        </Content>
    </Container>

    <Container>
        <Content>
            <List>
                <ListItem>
                  <TouchableOpacity onPress={this.onButtonPress3.bind(this)}>

                    <Thumbnail square size={80} source={require('../../images/amp1.jpg')} />
                    <Body>
                        <Text>PopSetting</Text>
                        <Text note>Popelipop</Text>
                    </Body>
                  </TouchableOpacity>

                </ListItem>
            </List>
        </Content>
    </Container>

    <Container>
        <Content>
            <List>
                <ListItem>
                  <TouchableOpacity onPress={this.onButtonPress4.bind(this)}>

                    <Thumbnail square size={80} source={require('../../images/amp1.jpg')} />
                    <Body>
                        <Text>JazzSetting</Text>
                        <Text note>Lights out and jazz</Text>
                    </Body>
                  </TouchableOpacity>

                </ListItem>
            </List>
        </Content>
    </Container>

  <TouchableOpacity onPress={this.onButtonPress5.bind(this)} style={styles.buttonContainer}>
<Text style={styles.buttonText}>Back</Text>
  </TouchableOpacity>


  </View>
);
}
}


// StyleSheet
const styles = StyleSheet.create({
container: {
  padding: 20,
  backgroundColor: 'white',
  flex: 1,

},
input: {
  height: 40,
  backgroundColor: 'white',
  marginBottom: 10,
  color: 'black',
  paddingHorizontal:10,
  padding: 10,
    },
buttonContainer: {
  backgroundColor: 'white',
  paddingVertical: 1,
  borderColor: 'black'
},
buttonText: {
  textAlign: 'center',
  color: 'black',
  fontWeight: '700',
  borderColor: 'black'

},
hairline:{
height:1,
backgroundColor:'black',
marginBottom:40,
marginLeft:10,
marginRight:10
},
text:{
  flex: 0.2,
  justifyContent: 'center',
  alignItems: 'center',

}
})
module.exports = Settings;
