import {firebaseRef} from '../firebase/firebase'
import { Actions } from 'react-native-router-flux'
import {
    SET_STATUS_TO_OUT,
    SET_STATUS_TO_NOT_OUT
   } from '../actions/types'

export const upDateStatus = ({ status }) => {
  return (dispatch) => {
    const { currentUser } = firebaseRef.auth()

    dispatch({ type: SET_STATUS_TO_OUT })

    firebaseRef.database().ref(`/users/${currentUser.uid}/profile`)
        .update({ status })
        .then(() => {
          Actions.goingOut()
          console.log('status changed to "out"')
        })
  }
}

export const upDateStatusToNotGoOut = ({ status }) => {
  return (dispatch) => {
    const { currentUser } = firebaseRef.auth()

    dispatch({ type: SET_STATUS_TO_NOT_OUT })

    firebaseRef.database().ref(`/users/${currentUser.uid}/profile`)
          .update({ status })
          .then(() => {
            Actions.notGoingOut()
            console.log('status changed to "not out"')
          })
  }
}
