import {firebaseRef} from '../firebase/firebase'

import {
UPDATE_CURRENT_MODE
} from './types'

export const currentMood = ({ prop, value }) => {
  return (dispatch) => {
    const { currentUser } = firebaseRef.auth()

    dispatch({ type: UPDATE_CURRENT_MODE,
      payload: { prop, value } })

    firebaseRef.database().ref(`/users/${currentUser.uid}/profile`)
            .update({ prop, value })
            .then(() => {
              console.log('added profile')
            })
  }
}
