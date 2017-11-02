import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import LoginScreen from './Components/LoginScreen';
import RegisterScreen from './Components/RegisterScreen';

export default props => (
  <Router>
  <Scene key='LoginScreen' component={LoginScreen} title="Login" />
  <Scene key='RegisterScreen' component={RegisterScreen} title="Register" />
  </Router>
);
