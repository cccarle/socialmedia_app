import React, { Component } from 'react'
import firebase from 'firebase'
import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  TouchableHighlight
} from 'react-native'
import { Avatar } from 'react-native-elements'
import { fetchProfileData } from '../actions'
import _ from 'lodash'
import { connect } from 'react-redux'
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

  componentWillMount () {
    this.props.fetchProfileData()
  }

  renderAvatarOrProfilePic () {
    if (!this.props.profile[0] || this.props.profile[0] === undefined) {
      return <Avatar
        rounded
        size={265}
        source={require('../../src/assets/better.png')}
        activeOpacity={0.7}
        avatarStyle={{borderColor: 'white', borderWidth: 1}}

/>
    } else {
      return <Avatar
        rounded
        size={265}
        source={{ uri: this.props.profile[0].profile_picture}}
        activeOpacity={0.7}
        avatarStyle={{borderColor: 'white', borderWidth: 1}}

    />
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
             }
           })
           .catch((error) => {
             console.log(error)
           })
           .catch((error) => {
             console.log(error)
           })
           .catch((error) => {
             console.log(error)
           })
    })
  }

  render () {
    const selectedPicture = this.state.dp ? (<TouchableOpacity onPress={() => this.openPicker()}>
      <Avatar
        size={265}
        rounded
        source={{ uri: this.state.dp }}
        activeOpacity={0.7}
/>
    </TouchableOpacity>) : (

      <TouchableHighlight onPress={() => this.openPicker()} >

        {this.renderAvatarOrProfilePic()}
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

const mapStateToProps = state => {
  const profile = _.map(state.profile, (val) => {
    return {...val}
  })

  return {
    profile: profile
  }
}

export default connect(mapStateToProps, {fetchProfileData})(ProfilePictureHandeler)
