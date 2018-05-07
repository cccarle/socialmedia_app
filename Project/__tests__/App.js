import 'react-native'
import React from 'react'
import App from '../../Project/App'
import request from '../src/reducers/ListReducer'
import authReducer from '../src/reducers/AuthReducer'

describe('Request reducer', () => {
  it('Initial state should be an empty object', () => {
    expect(request(undefined, {})).toEqual({})
  })
})

describe('Auth reducer', () => {
  it('Initial state should have email set to "", password to "" and loading to false', () => {
    expect(authReducer(undefined, {})).toEqual({
      email: '',
      password: '',
      loading: false
    })
  })
})

// add user to firebase, check with snapshot