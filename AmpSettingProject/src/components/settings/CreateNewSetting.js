import React, { Component } from 'react'


import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native'

import {
    Back,
    Heart,
    More,
    PinIcon,
    Share,

} from '.././icons'

import LocalImage from './LocalImage'

export default class CreateNewSetting extends Component {
  constructor(props) {
  super(props);
  this.state = { text: 'Write setting or description here' };
}
    onButtonPress(){
        this.props.navigator.push({
            id: 'HomeScreenLoggedIn'
        });
    }
    render(){
        return (
            <View style={styles.PinContainer}>

              <View style={styles.PinHeader}>
                <View style={styles.UtilityNav}>
                  <TouchableOpacity onPress={this.onButtonPress.bind(this)}>
                    <Back />
                  </TouchableOpacity>
                  <Heart />
                  <Share />
                  <More />
                </View>
                <View style={styles.PinButtonContainer}>
                  <View style={styles.PinButton}>
                    <PinIcon />
                    <Text style={styles.PinButtonText}>Save</Text>
                  </View>
                </View>
              </View>

              <View style={styles.PinContent}>
                <LocalImage
                    source={require('../../images/amp1.jpg')}
                    orginalWidth={1864}
                    originalHeight={1045}
                />
              </View>

              <View style={styles.PinMeta}>
                <View style={styles.PinMetaTextContainer}>
                  <Text style={styles.PinMetaText}>Jazz Settings</Text>
                    <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, width:300}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />

                </View>
                <View style={styles.PinButtonContainer}>
                  <TextInput/>
                </View>
              </View>

              <View style={styles.PinUser}>
                <View style={styles.PinUserAvatar}>

                </View>

              </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    PinContainer: {
        flex: 1,
        alignSelf: 'stretch'
    },
    PinHeader: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        flex: 1,
        padding: 8
    },
    UtilityNav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1
    },
    PinButton: {
        flexDirection: 'row',
        backgroundColor: 'red',
        padding: 8,
        borderRadius: 6,
        justifyContent: 'space-between',
        width: 60
    },
    PinButtonText: {
        color: 'white'
    },
    PinButtonContainer: {
        flex: 1,
        alignItems: 'flex-end'
    },
    PinContent: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 8,
        paddingRight: 8,
    },
    ImagePlaceholder: {
        backgroundColor: '#1e1e1e',
        flex: 1,
        alignSelf: 'stretch',
        borderRadius: 6
    },
    PinMeta: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 16,
        paddingRight: 8,
        paddingBottom: 16,
        paddingLeft: 8
    },
    PinMetaTextContainer: {

    },
    UtilityButton: {
        backgroundColor: '#cecece',
        alignItems: 'center',
        justifyContent: 'center'
    },
    UtilityButtonText: {
        color: 'black',
        fontWeight: 'bold'
    },
    PinUser: {
        flex: 5,
        flexDirection: 'row',
        paddingLeft: 8,
        paddingRight: 8
    },
    PinUserAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'black',
        marginRight: 8
    },
    TextBold: {
        fontWeight: 'bold'
    }
})
