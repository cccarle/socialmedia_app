import React, { Component } from 'react'

import {
    Image,
    Dimensions
} from 'react-native'


const LocalImage = ({source, orginalWidth, originalHeight}) => {
    let windowWidth = Dimensions.get('window').width
    let widthChange = (windowWidth-16)/orginalWidth
    let newWidth = orginalWidth * widthChange
    let newHeight = originalHeight * widthChange

    return (
        <Image source={source} style={{width: newWidth, height: newHeight}}/>
    )
}

export default LocalImage