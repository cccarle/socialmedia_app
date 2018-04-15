import {firebaseRef} from '../firebase/firebase'

import {
  CURRENT_PROFILE_DATA
} from './types'

export const fetchProfileData = () => {
  return (dispatch) => {
    let userId = firebaseRef.auth().currentUser.uid
        // Check if the current signed in user have value in the database
    firebaseRef.database().ref(`/users/${userId}`).once('value').then(function (snapshot) {
      
      dispatch({ type: CURRENT_PROFILE_DATA, payload: snapshot.val()})
    })
  }
}
