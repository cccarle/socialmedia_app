import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  AsyncStorage,
  TextInput
} from 'react-native'


import { Container, Content, List, ListItem, Thumbnail, Body, Header ,Left, Button, Icon, Title, Right} from 'native-base';

import {
  Back,
  Heart,
  More,
  PinIcon,
  Share
} from '.././icons'

export default class ListThumbnailExample extends Component {

  onButtonPress1(){
    this.props.navigator.push({
      id: 'HomeScreen'
    });

}

  constructor(props){
      super(props)

      this.state = {
          setting:'',
      }

      this._saveText = this._saveText.bind(this)
      this._getText = this._getText.bind(this)

}

      _saveText(){
        try {
          AsyncStorage.setItem("name", "Bass : 6 Middle : 6 Treble: 7 Gain:5");
          console.log('stored key');
} catch (error) {
console.log(error);
// Error saving data
}
      }

_getText(){

  AsyncStorage.getItem("name").then((value) => {
   console.log("Get Value >> ", value);
}).done();
}

    render() {
        return (
            <Container>
              <Header>
              <Left>

                  <Button transparent>
                    <TouchableOpacity onPress={this.onButtonPress1.bind(this)}>
                      <Icon name='arrow-back' />
                      </TouchableOpacity>

                  </Button>
              </Left>
              <Body>
                  <Title>My Setting</Title>
              </Body>
              <Right>
                  <Button transparent>
                      <Icon name='menu' />
                  </Button>
              </Right>
          </Header>
                <Content>
                    <List>
                        <ListItem >
                            <Text>Rock</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Pop</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Add new favorite setting</Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}
