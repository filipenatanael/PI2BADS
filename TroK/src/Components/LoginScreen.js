import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, KeyboardAvoidingView, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

import LoginForm from './LoginForm';

export default class LoginScreen extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Image style={{ flex: 1, width: null }} source={require('../images/Background.png')}>
      <TouchableHighlight onPress={() => Actions.RegisterScreen()}>
      <Text>I dont have account!</Text>
      </TouchableHighlight>
      <View style={styles.logoContainer}>

      <Image
      style={styles.logo}
      source={require('../images/logoTrok.jpeg')}
      />
      <Text style={styles.title}>Hello, Welcome to the TroK.</Text>
      </View>
      <View style={styles.form}>
      <LoginForm />

      </View>
      </Image>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  title: {
    color: '#000',
    marginTop: 10,
    textAlign: 'center',
    opacity: 0.5,
  },
  form: {

  }
});
