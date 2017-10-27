import firebase from 'firebase';
import React, { Component } from 'react';
import { AppRegistry, View, Text, Button } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { employeesList: 0 }
  }

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
    employees.child("001").child("name").set("Lucas Santos");
  }

  ListDataTesting() {
    var employees = firebase.database().ref("employees");
    employees.on('value', (snapshot) => {
        var List = snapshot.val();
        this.setState({ employeesList: List } );
    });
  }


  render() {
    let {employeesList} = this.state;
    return (
      <View>
      <Button
      onPress={() => { this.SaveDataTesting(); }}
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
      <Text>{employeesList}</Text>
      </View>
    );
  }
}


AppRegistry.registerComponent('TroK', () => App);
