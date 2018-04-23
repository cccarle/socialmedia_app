import {firebaseRef} from '../firebase/firebase'

import {
    NAME_CHANGED,
    AGE_CHANGED,
    CREATE_PROFILE
} from './types'

import { Actions } from 'react-native-router-flux'

export const nameChanged = (text) => {
  return {
    type: NAME_CHANGED,
    payload: text
  }
}

export const ageChanged = (number) => {
  return {
    type: AGE_CHANGED,
    payload: number
  }
}

/*
Saves profile to firebase datastore and then redirect to selecStatus scene
*/

export const createProfiles = ({ name, age }) => {
  return (dispatch) => {
    const { currentUser } = firebaseRef.auth()

    dispatch({ type: CREATE_PROFILE })
    firebaseRef.database().ref(`/users/${currentUser.uid}/profile`)
            .update({ name, age })
            .then(() => {
              console.log('added profile')
              Actions.selectStatus()
            })
  }
}

