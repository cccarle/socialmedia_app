
import {firebaseRef} from '../firebase/firebase'

import {
    UPDATE_LIST_SUCCESS
} from './types'

export const fetchList = () => {
  return (dispatch) => {
    firebaseRef.database().ref(`/users`)
        .on('value', snapshot => {
          dispatch({ type: UPDATE_LIST_SUCCESS, payload: snapshot.val() })
        })
  }
}
