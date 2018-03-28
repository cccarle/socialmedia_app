import React from 'react'
import { Router, Scene, Actions } from 'react-native-router-flux'
import LoginForm from './components/LogInForm'
import CreateProfile from './components/createProfile'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root' hideNavBar>
        <Scene key='auth'>
          <Scene key='login' component={LoginForm} hideNavBar />
        </Scene>
        <Scene key='main'>
          <Scene
            rightTitle='Add'
          // onRight={() => Actions.EmployeeCreate()}
            key='EmployeeList'
            component={CreateProfile}
            title='Create Profile'
        />
        </Scene>
      </Scene>
    </Router>
  )
}

export default RouterComponent
