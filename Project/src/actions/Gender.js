import {firebaseRef} from '../firebase/firebase'

import {
GENDER_CHANGED
} from './types'

export const updateGender = ({ prop, gender }) => {
  return (dispatch) => {
    const { currentUser } = firebaseRef.auth()

    dispatch({ type: GENDER_CHANGED,
      payload: { prop, gender } })
    firebaseRef.database().ref(`/users/${currentUser.uid}/profile`)
            .update({ prop, gender })
            .then(() => {
              console.log('updated gender')
            })
  }
}
