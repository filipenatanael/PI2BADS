import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import LoginScreen from './Components/LoginScreen';
import RegisterScreen from './Components/RegisterScreen';
import Welcome from './Components/Welcome';

export default props => (
  <Router>
  <Scene key='app'>
  <Scene key='LoginScreen' component={LoginScreen} title="Login" />
  <Scene key='RegisterScreen' component={RegisterScreen} title="Register" />
  <Scene key='Welcome' component={Welcome} title="Welcome" initial />
  </Scene>
  </Router>
);
