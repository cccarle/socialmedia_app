import * as Firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyB4dqPB3YfL02-KGUIEQoGao-jwvqaIq80',
  authDomain: 'theproject-12c94.firebaseapp.com',
  databaseURL: 'https://theproject-12c94.firebaseio.com',
  projectId: 'theproject-12c94',
  storageBucket: 'theproject-12c94.appspot.com',
  messagingSenderId: '1026203008937'
}

export const firebaseRef = Firebase.initializeApp(config)
