import {firebaseRef} from '../firebase/firebase'

import {
    DESCRIPTION_TEXT_CHANGED
} from './types'

export const descriptionTextChanged = (descriptionText) => {
  return (dispatch) => {
    const { currentUser } = firebaseRef.auth()

    dispatch({ type: DESCRIPTION_TEXT_CHANGED,
      payload: descriptionText})

    firebaseRef.database().ref(`/users/${currentUser.uid}/profile`)
                .update({ descriptionText })
                .then(() => {
                  console.log('updated description text')
                })
  }
}
