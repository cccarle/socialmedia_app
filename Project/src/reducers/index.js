import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import CreateProfileReducer from './CreateProfileReducer'

export default combineReducers({
  auth: AuthReducer,
  create: CreateProfileReducer
})
