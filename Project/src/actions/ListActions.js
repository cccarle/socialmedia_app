import {firebaseRef} from '../firebase/firebase'

import {
  UPDATE_LIST_SUCCESS
} from './types'

export const fetchList = () => {
  return (dispatch) => {
    const arrayToFilter = []

    firebaseRef.database().ref().child('users')
    .on('value', snapshot => {
      let snap = snapshot.val()

      let keys = Object.keys(snap)

      for (var i = 0; i < keys.length; i++) {
        var k = keys[i]
        var name = snap[k].profile.name
        var age = snap[k].profile.age
        var status = snap[k].profile.status
        var profile_picture = snap[k].profile.profile_picture

        let users = {name: '', age: '', status: Boolean, profile_picture: ''}

        users.name = name
        users.age = age
        users.status = status
        users.profile_picture = profile_picture
        arrayToFilter.push(users)
      }

      var arr = arrayToFilter.filter(child => child.status === true)

      dispatch({ type: UPDATE_LIST_SUCCESS, payload: arr })
    })
  }
}
