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

  isLoggedIn() {
    const user = firebase.auth();
    const currentUser = user.currentUser;

    if(currentUser){
      alert("User is logged!");
    }else{
      alert("User is not logged!");
    }
  }

  isLoggedInWithListening() {
    const user = firebase.auth();

    user.onAuthStateChanged(
      (currentUser) => {
        if(currentUser) {
          alert("User is logged!");
        }else{
          alert("User is not logged!");
        }
      }
    );
  }

  SignOutUser() {
    const user = firebase.auth();
    user.signOut();
  }

  LogInUser(){
    var email = "trok.projects@gmail.com";
    var password = "test123";

    const user = firebase.auth();
    user.signInWithEmailAndPassword(
      email,
      password
    ).catch(
      (error) => {
        alert(error.message);
      }
    );
  }

  render() {
    return (
      <View>
      <Button
      onPress={() => { this. RegisterUser(); }}
      title="Create User"
      color="#000"
      accessibilityLabel="Create User"
      />
      <Button
      onPress={() => { this.isLoggedIn(); }}
      title="Check User"
      color="#00FF7F"
      accessibilityLabel="Check User"
      />
      <Button
      onPress={() => { this.isLoggedIn(); }}
      title="Sign out"
      color="#00FF7F"
      accessibilityLabel="Sign out"
      />
      <Button
      onPress={() => { this.LogInUser(); }}
      title="Sign In"
      color="#00FF7F"
      accessibilityLabel="Sign In"
      />
      </View>
    );
  }
}


AppRegistry.registerComponent('TroK', () => App);
