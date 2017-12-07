import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import LoginScreen from './Components/LoginScreen';
import RegisterScreen from './Components/RegisterScreen';
import Welcome from './Components/Welcome';
import ProfileScreen from './Components/ProfileScreen';

export default props => (
  <Router>
  <Scene key='app'>
  <Scene key='loginScreen' component={LoginScreen} title="Login" hideNavBar={true} initial />
  <Scene key='RegisterScreen' component={RegisterScreen} title="Register" hideNavBar={true} />
  <Scene key='welcome' component={Welcome} title="Welcome" hideNavBar={true}  />
  <Scene key='profileScreen' component={ProfileScreen} title='ProfileScreen' hideNavBar={true} />
  </Scene>
  </Router>
);
