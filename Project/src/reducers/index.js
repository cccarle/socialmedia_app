import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import CreateProfileReducer from './CreateProfileReducer'
import SetStatusReducer from './SetStatusReducer'
import ListReducer from './ListReducer'
import CurrentProfileReducer from './CurrentProfileReducer'
import CurrentModeReducer from './CurrentModeReducer'
import EditProfileReducer from './EditProfileReducer'
import GenderReducer from './GenderReducer'

export default combineReducers({
  auth: AuthReducer,
  create: CreateProfileReducer,
  status: SetStatusReducer,
  list: ListReducer,
  profile: CurrentProfileReducer,
  moode: CurrentModeReducer,
  edit: EditProfileReducer,
  gender: GenderReducer
})
