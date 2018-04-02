import firebase from 'firebase'

import {
    NAME_CHANGED,
    AGE_CHANGED,
    CREATE_PROFILE,
    CREATE_PROFILE_SUCCESS
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
    const { currentUser } = firebase.auth()

    dispatch({ type: CREATE_PROFILE })
    firebase.database().ref(`/users/${currentUser.uid}/profile`)
            .push({ name, age })
            .then(() => {
              console.log('added profile')
              Actions.selectStatus()
            })
  }
}

// export const createProfilesSuccess = () => {
//   return {
//     type: CREATE_PROFILE_SUCCESS,
//     payload: loading
//   }
// }
