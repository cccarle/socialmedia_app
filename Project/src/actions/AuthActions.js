
import {firebaseRef} from '../firebase/firebase'

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  REGISTER_USER,
  DELETE_ERROR,
  SIGN_OUT
} from './types'

import { Actions } from 'react-native-router-flux'

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
}

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
}

/*
Sign in - if a user already have created a profile it will be redirected to "selectStatus"
if a user has created a account but not yet created a profile it will be redirected to "createProfile"
*/
export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER })
    firebaseRef.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSucess(dispatch, user))
      .then(() => {
        let userId = firebaseRef.auth().currentUser.uid
        // Check if the current signed in user have value in the database
        return firebaseRef.database().ref(`/users/${userId}`).once('value').then(function (snapshot) {
          if (!snapshot.val()) {
            Actions.profile()
          } else if (snapshot.val()) {
            Actions.main()
          }
        })
      })
      .catch(() =>
        loginUserFail(dispatch))
      .catch(() => loginUserFail(dispatch))
  }
}

export const signOut = () => {
  return (dispatch) => {
    const { currentUser } = firebaseRef.auth()
    dispatch({ type: SIGN_OUT })
    firebaseRef.auth().signOut().then(function () {
      console.log('Signed Out')
    }, function (error) {
      console.error('Sign Out Error', error)
    })
  }
}

/*
Register user - redirected to "createProfile" scene
*/
export const registerUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: REGISTER_USER })
    firebaseRef.auth().createUserWithEmailAndPassword(email, password)
      .then(user => loginUserSucess(dispatch, user))
      .then(() => {
        Actions.profile()
      })
      .catch(() => loginUserFail(dispatch))
      .catch(() => loginUserFail(dispatch))
  }
}

export const deleteErrorMessage = () => {
  return (dispatch) => {
    dispatch({type: DELETE_ERROR})
  }
}
const loginUserSucess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCESS,
    payload: user
  })
}

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL })
}
