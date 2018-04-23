import {
    NAME_CHANGED,
    AGE_CHANGED,
    CREATE_PROFILE,
    CREATE_PROFILE_SUCCESS
  } from '../actions/types'
  
  const INTIAL_STATE = {
    name: '',
    age: '',
    loading: false
  }
  
  export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case NAME_CHANGED:
        return {...state, name: action.payload}

        case AGE_CHANGED:
        console.log(action.payload)
        return {...state, age: action.payload} 

        case CREATE_PROFILE:
        return { ...state,  name: action.payload, age: action.payload }

        case CREATE_PROFILE_SUCCESS:
        return { ...state,  INTIAL_STATE }

      default:
        return state
    }
  }
  