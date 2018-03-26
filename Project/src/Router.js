import React from 'react'
import { Router, Scene, Actions } from 'react-native-router-flux'
import LoginForm from './components/LogInForm'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root' hideNavBar>
        <Scene key='auth'>
          <Scene key='login' component={LoginForm} title='log in' />
        </Scene>
      </Scene>
    </Router>
  )
}

export default RouterComponent
