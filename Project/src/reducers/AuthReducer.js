
/*
Reducers watch for an action and then updates the state with the new payload
 */

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../actions/types'

const INTIAL_STATE = {
  email: '',
  password: '',
  loading: false
}

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload }

    case PASSWORD_CHANGED:
      return { ...state, password: action.payload }

    case LOGIN_USER_SUCESS:
      return {...state, user: action.payload, error: '', loading: false}
       // if sign in sucess  ' ' error sate

    case LOGIN_USER_FAIL:
      return {...state, error: 'Authentication fail', password: '', loading: false}
      // if fail 0 password

    case LOGIN_USER:
      return {...state, loading: true, error: ''}

    default:
      return state
  }
}
