import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import Login from './src/Components/Login';


export default class App extends Component {
     render() {
       return (
         <Login />
       );
     }
}


AppRegistry.registerComponent('TroK', () => App);
