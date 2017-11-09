import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import LoginScreen from './Components/LoginScreen';
import RegisterScreen from './Components/RegisterScreen';
import Welcome from './Components/Welcome';
import ProfileScreen from './Components/ProfileScreen'

export default props => (
  <Router>
  <Scene key='app'>
  <Scene key='loginScreen' component={LoginScreen} title="Login" />
  <Scene key='RegisterScreen' component={RegisterScreen} title="Register" />
  <Scene key='welcome' component={Welcome} title="Welcome" initial />
  <Scene key='profileSreen' component={ProfileScreen} title='ProfileScreen' />
  </Scene>
  </Router>
);
