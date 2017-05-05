import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native'

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';

export default class CreateSettings extends Component {
  
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title> Create Setting</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>This is a awesome footer</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

module.exports = CreateSettings;
