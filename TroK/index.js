import firebase from 'firebase';
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Routes from './src/Routes';

export default class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCd5GYkC7z5MSsymZQ0aaVpJXzySWp3Ocw",
      authDomain: "trok-5e864.firebaseapp.com",
      databaseURL: "https://trok-5e864.firebaseio.com",
      projectId: "trok-5e864",
      storageBucket: "trok-5e864.appspot.com",
      messagingSenderId: "341467984322"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
     <Routes />
    );
  }
}

AppRegistry.registerComponent('TroK', () => App);
