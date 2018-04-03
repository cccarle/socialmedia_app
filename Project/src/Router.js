import React from 'react'
import { Router, Scene, Actions } from 'react-native-router-flux'
import LoginForm from './components/LogIn/LogInForm'
import CreateProfile from './components/CreateProfile/createProfile'
import SelectStatus from './components/SelectStatus/SelectStatus'
import Register from './components/Register/Register'
const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root' hideNavBar>
        <Scene key='auth'>
          <Scene key='login' component={LoginForm} hideNavBar initial  />
          <Scene key='register' component={Register} hideNavBar />
        </Scene>
        
        <Scene key='profile'>
          <Scene
            key='createProfile'
            component={CreateProfile}
            hideNavBar
        />
        </Scene>
        <Scene key='main'>
          <Scene
            key='selectStatus'
            component={SelectStatus}
            title='Select Status'
        />
        </Scene>
      </Scene>
    </Router>
  )
}

export default RouterComponent








