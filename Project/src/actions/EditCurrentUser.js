import {firebaseRef} from '../firebase/firebase'

import {
    EDIT_NAME_CHANGED,
    EDIT_AGE_CHANGED,
    EDIT_PROFILE
} from './types'

import { Actions } from 'react-native-router-flux'

export const nameChangedEdit = (text) => {
  return {
    type: EDIT_NAME_CHANGED,
    payload: text
  }
}

export const ageChangedEdit = (number) => {
  return {
    type: EDIT_AGE_CHANGED,
    payload: number
  }
}

/*
Saves profile to firebase datastore and then redirect to selecStatus scene
*/

export const updateProfile = ({ age, name }) => {
  return (dispatch) => {
    const { currentUser } = firebaseRef.auth()

    dispatch({ type: EDIT_PROFILE })
    firebaseRef.database().ref(`/users/${currentUser.uid}/profile`)
            .update({ age, name })
            .then(() => {
              console.log('Edited profile')
              Actions.goingOut()
            })
  }
}

export const updateProfileName = ({ name }) => {
    return (dispatch) => {
      const { currentUser } = firebaseRef.auth()
  
      dispatch({ type: EDIT_PROFILE })
      firebaseRef.database().ref(`/users/${currentUser.uid}/profile`)
              .update({ name })
              .then(() => {
                console.log('Edited profile')
                Actions.goingOut()
              })
    }
  }
  export const updateProfileAge = ({ age }) => {
    return (dispatch) => {
      const { currentUser } = firebaseRef.auth()
  
      dispatch({ type: EDIT_PROFILE })
      firebaseRef.database().ref(`/users/${currentUser.uid}/profile`)
              .update({ age })
              .then(() => {
                console.log('Edited profile')
                Actions.goingOut()
              })
    }
  }
  
  