import {
    EDIT_NAME_CHANGED,
    EDIT_AGE_CHANGED,
    EDIT_PROFILE
  } from '../actions/types'
  
  const INTIAL_STATE = {
    name: '',
    age: '',
    loading: false
  }
  
  export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case EDIT_NAME_CHANGED:
        
        return {...state, name: action.payload}

        case EDIT_AGE_CHANGED:
        return {...state, age: action.payload} 

        case EDIT_PROFILE:
        return { ...state,  name: action.payload, age: action.payload }

        // case CREATE_PROFILE_SUCCESS:
        // return { ...state,  INTIAL_STATE }

      default:
        return state
    }
  }
  