import React, { Component } from 'react'

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native'

import {
    Back,
    Heart,
    More,
    PinIcon,
    Share
} from '.././icons'

import LocalImage from './LocalImage'

export default class JazzSetting extends Component {
    onButtonPress(){
        this.props.navigator.push({
            id: 'Settings'
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
                  <Text style={[styles.PinMetaText, styles.TextBold]}>Bass : 6 Middle : 6 Treble: 7 Gain:5 </Text>
                </View>
                <View style={styles.PinButtonContainer}>
                  <View style={[styles.PinButton, styles.UtilityButton]}>
                    <Text style={[styles.PinButtonText, styles.UtilityButtonText]}>Visit</Text>
                  </View>
                </View>
              </View>

              <View style={styles.PinUser}>
                <View style={styles.PinUserAvatar}>

                </View>
                <View style={styles.PinUserContainer}>
                  <Text style={styles.PinUserText}>
                    <Text style={styles.TextBold}>User Name </Text>saved to<Text style={styles.TextBold}> My Settings</Text>
                  </Text>
                  <Text style={styles.PinUserText}>Description Lorem Ipsum</Text>
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



module.exports = JazzSetting;
