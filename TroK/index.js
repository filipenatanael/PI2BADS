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

  SaveDataTesting() {
    var employees = firebase.database().ref("employees");
    employees.child("001").child("name").set("John Wick");
    /*
    var database = firebase.database();
    database.ref("Punctuation").set("1200");
    database.ref("Punctuation").remove();
    */
  }

  render() {
    return (
    <View>
    <Button
    onPress={() => { this.SaveDataTesting(); }}
    title="Save Data Testing"
    color="#000"
    accessibilityLabel="Save Data Testing"
    />
    <Text>My Application</Text>
    </View>
    );
  }
}


AppRegistry.registerComponent('TroK', () => App);
