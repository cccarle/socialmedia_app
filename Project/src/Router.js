import React from 'react'
import { Router, Scene, Actions } from 'react-native-router-flux'
import LoginForm from './components/LogIn/LogInForm'
import CreateProfile from './components/CreateProfile/createProfile'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root' hideNavBar>
        <Scene key='auth'>
          <Scene key='login' component={LoginForm} hideNavBar />
        </Scene>
        <Scene key='main'>
          <Scene
            key='createProfile'
            component={CreateProfile}
            title='Create Profile'
        />
        </Scene>
      </Scene>
    </Router>
  )
}

export default RouterComponent
