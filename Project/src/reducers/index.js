import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import CreateProfileReducer from './CreateProfileReducer'
import SetStatusReducer from './SetStatusReducer'

export default combineReducers({
  auth: AuthReducer,
  create: CreateProfileReducer,
  status: SetStatusReducer
})
