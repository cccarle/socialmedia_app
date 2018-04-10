import React from 'react'
import { Router, Scene, Actions } from 'react-native-router-flux'
import LoginForm from './components/LogIn/LogInForm'
import CreateProfile from './components/CreateProfile/createProfile'
import SelectStatus from './components/SelectStatus/SelectStatus'
import Register from './components/Register/Register'

import GoingOut from './components/GoingOut/GoingOut'
import NotGoingOut from './components/NotGoingOut/NotGoingOut'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root' hideNavBar>
        <Scene key='auth'>
          <Scene key='login' component={LoginForm} hideNavBar />
          <Scene key='register' component={Register} hideNavBar />
        </Scene>

        <Scene key='profile'>
          <Scene
            key='createProfile'
            component={CreateProfile}
            hideNavBar
        />
        </Scene>
        <Scene key='main' initial>
          <Scene
            key='selectStatus'
            component={SelectStatus}
            hideNavBar
/>
          <Scene
            initial
            hideNavBar
            // onLeft={() => Actions.selectStatus()}
            // leftTitle='Change Status'
            key='goingOut'
            component={GoingOut}
/>
          <Scene
            onLeft={() => Actions.selectStatus()}
            leftTitle='Change Status'
            key='notGoingOut'
            component={NotGoingOut}
/>
        </Scene>
      </Scene>
    </Router>
  )
}

export default RouterComponent
