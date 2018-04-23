import React, { Component } from 'react'
import firebase from 'firebase'
import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  TouchableHighlight
} from 'react-native'
import { Avatar } from 'react-native-elements'

import RNFetchBlob from 'react-native-fetch-blob'
import ImagePicker from 'react-native-image-crop-picker'

class ProfilePictureHandeler extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      dp: null
    }
  }

  openPicker () {
    this.setState({ loading: true })
    const Blob = RNFetchBlob.polyfill.Blob
    const fs = RNFetchBlob.fs
    window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
    window.Blob = Blob

    const { currentUser } = firebase.auth()

    ImagePicker.openPicker({
      cropping: true,
      height: 265,
      width: 265,
      mediaType: 'photo'
    }).then(image => {
      const imagePath = image.path

      let uploadBlob = null

      const imageRef = firebase.storage().ref(`/users/${currentUser.uid}/profile`).child('dp.jpg')

      let mime = 'image/jpg'
      fs.readFile(imagePath, 'base64')
            .then((data) => {
              if(blob == null ) {
                console.log('do something here')
              }
              return Blob.build(data, { type: `${mime};BASE64` })
            })
          .then((blob) => {
            uploadBlob = blob
            return imageRef.put(blob, { contentType: mime })
          })
           .then(() => {
             uploadBlob.close()
             return imageRef.getDownloadURL()
           })
           .then((url) => {
             firebase.database().ref(`/users/${currentUser.uid}/profile`).update({
               profile_picture: url
             })
             let obj = {}
             obj['loading'] = false
             obj['dp'] = url
             this.setState(obj)
           })
           .catch((error) => {
             console.log(error + 'OPEN PICKER AGAIN')
             if (error) {
               this.setState({loading: false})
             }
           })
           .catch((error) => {
             console.log(error)
             if (error) {
               this.setState({loading: false})
             }
           })
           .catch((error) => {
             console.log(error)

             if (error) {
               this.setState({loading: false})
             }
           })
           .catch((error) => {
             if (error) {
               this.setState({loading: false})
             }
           })
    })
  }

  render () {
    const selectedPicture = this.state.dp ? (<TouchableOpacity onPress={() => this.openPicker()}>
      <Avatar
        height={265}
        rounded
        source={{ uri: this.state.dp }}
        activeOpacity={0.7}
/>
    </TouchableOpacity>) : (

      <TouchableHighlight onPress={() => this.openPicker()} >

        <Avatar
          rounded
          height={265}
          source={require('../../src/assets/man.png')}
          activeOpacity={0.7}
/>
      </TouchableHighlight>

)
    // Default picture, d
    const standardPicture = this.state.loading ? <ActivityIndicator animating={this.state.loading} /> : (
      <View>
        {selectedPicture}
      </View>
  )

    return (
      <TouchableHighlight onPress={() => this.openPicker()} >
        <View>
          {standardPicture}
        </View>
      </TouchableHighlight>

    )
  }
}

export default ProfilePictureHandeler
