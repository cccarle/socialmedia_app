import {
    UPDATE_LIST_SUCCESS
   } from '../actions/types'

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_LIST_SUCCESS:
      return action.payload
    default:
      return state
  }
}
