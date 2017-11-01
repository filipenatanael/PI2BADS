import firebase from 'firebase';
import React, { Component } from 'react';
import { AppRegistry, View, Text, Button } from 'react-native';

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

   RegisterUser() {
     var email = "trok.projects@gmail.com";
     var password = "test123";
     var user = firebase.auth();
     user.createUserWithEmailAndPassword(
       email,
       password
     ).catch(
       (error) => {
         //error.code or error.message
         alert(error.message);
       }
     );
   }

  render() {
    return (
      <View>
      <Button
      onPress={() => { this. RegisterUser(); }}
      title="Save Data Testing"
      color="#000"
      accessibilityLabel="Save Data Testing"
      />
      <Button
      onPress={() => { this.ListDataTesting(); }}
      title="List Data Testing"
      color="#00FF7F"
      accessibilityLabel="List Data Testing"
      />
      </View>
    );
  }
}


AppRegistry.registerComponent('TroK', () => App);
