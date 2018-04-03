import firebase from 'firebase'

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  REGISTER_USER
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
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSucess(dispatch, user))
      .then(() => {
        let userId = firebase.auth().currentUser.uid
        // Check if the current signed in user have value in the database
        return firebase.database().ref(`/users/${userId}`).once('value').then(function (snapshot) {
          if (!snapshot.val()) {
            Actions.profile()
          } else if (snapshot.val()) {
            Actions.main()
          }
        })
      })
      .catch((error) =>
        console.log(error))
      .catch(() => loginUserFail(dispatch))
  }
}

/*
Register user - redirected to "createProfile" scene
*/
export const registerUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: REGISTER_USER })
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => loginUserSucess(dispatch, user))
      .then(Actions.profile())
      .catch(() => loginUserFail(dispatch))
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
