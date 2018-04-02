import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import ReduxThunk from 'redux-thunk'
import Router from './Router'
import firebase from 'firebase'

import RNFetchBlob from 'react-native-fetch-blob'

class App extends Component {
  componentWillMount () {
      // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyB4dqPB3YfL02-KGUIEQoGao-jwvqaIq80',
      authDomain: 'theproject-12c94.firebaseapp.com',
      databaseURL: 'https://theproject-12c94.firebaseio.com',
      projectId: 'theproject-12c94',
      storageBucket: 'theproject-12c94.appspot.com',
      messagingSenderId: '1026203008937'
    }
    firebase.initializeApp(config)
  }
  render () {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App
